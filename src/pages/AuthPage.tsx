import { useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Layout from './Layout'
import { setSession } from '../store/auth'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import supabase from '../config/subabaseClient'

// pwede rin dito ilagay or seperate file, na nasa import supabase from '../config/subabaseClient'
// const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)

export default function AuthPage() {

  const session = useAppSelector((state) => state.auth.isAuthenticated)
  const dispatch = useAppDispatch();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setSession(session))
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        dispatch(setSession(session));
      }
    });

    return () => subscription.unsubscribe();
  }, [dispatch])

  return (
    <>
      {!session ? (
        <div className='flex justify-center'>
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
        </div>
      ) : (
        <Layout />
        // kapag hindi naka redux, pwedeng ipasa yung session ng user para sa ibang components
        // <Layout user={session} />
      )}
    </>
  )
}
