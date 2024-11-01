import { FC, PropsWithChildren, useEffect } from 'react'
import { useAppDispatch } from '@/store/hooks'
import { useRouter } from 'next/navigation'
import { getInitialDataThunk, initialLoadingSelector } from '@/store/slices/initialLoading'
import styles from './InitialLoading.module.scss'
import { useSelector } from 'react-redux'

const InitialLoading: FC<PropsWithChildren> = props => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const initialLoadingState = useSelector(initialLoadingSelector)

  useEffect(() => {
    dispatch(getInitialDataThunk(router))
  }, [dispatch, router])

  if (initialLoadingState.initialLoading === null || initialLoadingState.initialLoading === 'pending') {
    return <div className={styles['initial-loading']}>
      <h3>Loading...</h3>
    </div>
  }

  return props.children
}

export default InitialLoading
