import Button from '../../components/Button'
import Header from '../../components/Header'
import {Container,TextContent,Title,TitleWighLight} from './styles'


 export function Home (){
    return(<>
        <Header/>
        <Container>
            <div>
                <Title>
                    <TitleWighLight>
                        Implemente
                        <br/>
                    </TitleWighLight>
                    O seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas...
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={() => null}/>
            </div>
            <div>
                <img src='' alt='Imagem Principal' />
            </div>
        </Container>
</>)
}