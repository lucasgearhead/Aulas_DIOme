import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'
import {CardContainer,Content,HasInfo,ImageBackground,PostInfo,UserInfo,UserPicture} from './style'

export default function Card() {
  return (
    <CardContainer>
        <ImageBackground src=''/>
        <Content>
            <UserInfo>
                <UserPicture src=''/>
                <div>
                    <h4>Lucas</h4>
                    <p>tempo postado</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projetos para curso de html e css</h4>
                <p>Projeto feito no curso</p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp/>10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}
