import styled from 'styled-components'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth, db} from '../firebase'
import {useRouter} from 'next/router'


function ChatScreen({chat,messages}) {

  const [user] = useAuthState(auth);

  const router = useRouter();

  return (
    <Container>
      <h1>This is a chat</h1>
    </Container>
  )
}

export default ChatScreen

const Container = styled.div``
