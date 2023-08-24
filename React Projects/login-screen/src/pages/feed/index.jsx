import Button from '../../components/Button'
import Card from '../../components/Card'
import { UserInfo } from '../../components/Card/style'
import Header from '../../components/Header'
import {Container,TextContent,Title,TitleWighLight} from './styles'


 export function Feed(){
    return(<>
        <Header/>
        <Container>
            <Card/>
            <UserInfo percentual={35} nome="Lucas" image=""/>
        </Container>
</>)
}