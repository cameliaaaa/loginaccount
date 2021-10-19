import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
    }
    button{
        border: none;
        background: white;
        cursor: pointer;
    }
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    height: 100px;
    padding: 10px 20px;
    color: rgb(20,167,240);
    font-size: 20px;
    font-weight: 600;
    line-height: 100px;
    >div{
        margin: 0 10px;
    }
    img{
        height: 100px;
    }
`;

export const ContactWrapper = styled.main`
    min-height: 950px;
    display: flex;
    justify-content: space-between;
`

export const ContactAside = styled.aside`
    min-width: 6%;
    background: rgb(36,126,198);
    a{
        display: block;
        height: 90px;
        text-align: center;
    }
    a.checked{
        background-color: rgb(30,171,241)
    }
    a>img{
        margin-top: 20px;
        height: 45px;
    }
`

export const ContactListWrapper = styled.div`
    width: 18%;
`

export const ContactControl = styled.div`
    padding: 20px 15px 0px;
    >div:first-of-type{
        position: relative;
        padding: 10px 0px;
        border-bottom: 1px solid gray;
    }
    input{
        height: 25px;
        width: 100%;
        margin: 30px 0;
        border: 1px solid gray;
        border-radius: 5px;
    }
    >div span:last-of-type{
        position: absolute;
        right: 0;
    }
    span>button:first-of-type{
        margin-right: 10px;
    }
`

export const ContactListItem = styled.div`
    display: flex;
    justify-content: space-around;
    >div:first-of-type{
        width: 15%;
        text-align: center;
    }
    >div:last-of-type{
        width: 75%;
        >div{
            width: 100%;
            cursor: pointer;
            line-height: 90px;
        }
        >div.checked{
            background-color: rgb(245,245,245);
            border-radius: 20px;
        }
    }
    div img{
        width: 45px;
        margin: 0px 20px;
        vertical-align: middle;
    }
`


export const ContactDetails = styled.article`
    width: 76%;
    background-color: rgb(245,245,245);
    .contactimg{
        display: block;
        width: 600px;
        margin: 200px auto 0;
    }
`
export const DetailsNav = styled.nav`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    height: 50px;
    margin-top: 50px;
    background-color: rgb(224,224,224);
    div{
        height: 50px;
        line-height: 50px;
        cursor: pointer;
    }
    div.checked{
        color: white;
    }
`

export const DetailsContent = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    border-top: 1px solid rgb(224,224,224);
    min-height: 600px;
    h1{
        font-size: 16px;
        line-height: 35px
    }
    .message{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        height: 300px;
        .profile{
            width: 25%;
        }
        .others{
            width: 75%;
        }
        span{
            margin-left: 300px;
        }
        img{
            margin: 80px 0 0 40px;
            width: 150px;
        }
    }
    .form{
        margin-top: 40px;
        h1{
            position: relative;
            span:last-of-type{
                position: absolute;
                right: 0;
            }
            input, select{
                width: 300px;
                height: 30px;
                text-indent: 10px;
                margin-left: 30px;
            }
        }
        .notes{
            text-align: center;           
            h1{
                color: gray;
                text-align: left;
            }
            textarea{
                font-size: 20px;
                text-indent: 30px;
                line-height: 30px;
                border: none;
            }
            input{
                width: 98%;
                height: 30px;
                border: 1px solid gray;
            }
        }
        .buttons{
            margin-top: 60px;
            button{
                margin-left: 30px;
                font-size: 17px;
                line-height: 30px;
                padding: 5px 40px;
                border-radius: 10px;
            }
            button:first-of-type{
                color: white;
                background: rgb(117,117,117);
            }
            button:last-of-type{
                background: rgb(224,224,224);
            }
            text-align: right;
        }
        
    }
`

export const StoryContent = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    border-top: 1px solid rgb(224,224,224);
    min-height: 600px;
    .title{
        background-color: rgb(189,189,189);
        color: rgb(84,84,84);
        line-height: 120px;
        display: flex;
        justify-content: space-between;
        div{
            font-size: 25px;
            font-weight: 500;
            margin: 0 50px;
        }
    }
    .stories{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        >div{
            box-sizing: border-box;
            padding: 20px 30px;
            background-color: white;
        }
        >div:first-of-type{
            width: 60%;
            img{
                display: block;
                margin: 40px auto;
                width: 600px;
            }
        }
        >div:last-of-type{
            width: 38%;
        }
        div.article{
            padding: 10px;
            border: 1px solid gray;
            line-height: 30px;
        }
    }
`