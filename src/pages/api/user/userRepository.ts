import { UserForAuth, UserRegistered } from '@/types/user'
import { sql } from '@vercel/postgres'
import { hashPassword } from '@/utils/password'

class repository {
  async getUserByUsername(username: string): Promise<UserRegistered | undefined> {
    try {
      const queryResult = await sql`
        SELECT * FROM users WHERE username = ${username};
      `;
      return queryResult.rows[0] as UserRegistered | undefined;
    } catch (e) {
      throw new Error('Error getting user by username in repository:', e);
    }
  }

  async createUser(user: UserForAuth): Promise<UserRegistered | null> {
    const hashedPassword = await hashPassword(user.passwordRaw)
    try {
      const queryResult = await sql`
        INSERT INTO users (username, password_hash)
        VALUES (${user.username}, ${hashedPassword})
        RETURNING *;
      `;
      return queryResult[0];
    } catch (e) {
      throw new Error('Error creating user in repository:', e);
    }
  }
}

export const userRepository = new repository()
