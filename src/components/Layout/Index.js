import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IoFastFoodSharp } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";
import { IoExit } from "react-icons/io5";
import { color } from '../../theme/theme';
import { fontSize } from '../../theme/theme';

const Index = ({ children }) => {

    const [clickIcon, setClickIcon] = useState(true);

    const changeIcon = () => {
        setClickIcon(!clickIcon);
    }

    return (
        <Wrapper>
            <div className={clickIcon ? "layout show-Layout" : "layout hide-Layout"}>
                <header className={clickIcon ? "header show-Header" : "header hide-Header"}>
                    <BtnMenuClick
                        onClick={changeIcon}>
                        {clickIcon ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </BtnMenuClick>
                </header>
                <aside className={clickIcon ? "aside show-Aside" : "aside hide-Aside"}>
                    <div className={clickIcon ? "btn-container" : "btn-container-none"} title="Alta de platillo">
                        <span className={clickIcon ? "wrapper-icon" : "wrapper-icon-none"}>
                            <IoFastFoodSharp />
                        </span>
                        <span className={clickIcon ? "wrapper-link" : "wrapper-link-none"}>
                            <Button>Alta de platillo</Button>
                        </span>
                    </div>

                    <div className={clickIcon ? "btn-container" : "btn-container-none"} title="Gestión de platillos">
                        <span className={clickIcon ? "wrapper-icon" : "wrapper-icon-none"}>
                            <AiFillSetting />
                        </span>
                        <span className={clickIcon ? "wrapper-link" : "wrapper-link-none"}>
                            <Button>Gestión de platillos</Button>
                        </span>
                    </div>

                    <div className={clickIcon ? "btn-container" : "btn-container-none"} title="Cerrar sesión">
                        <span className={clickIcon ? "wrapper-icon" : "wrapper-icon-none"}>
                            <IoExit />
                        </span>
                        <span className={clickIcon ? "wrapper-link" : "wrapper-link-none"}>
                            <Button>Cerrar sesión</Button>
                        </span>
                    </div>
                </aside>
                <main className={clickIcon ? "main show-Main" : "main hide-Main"}>
                    {children}
                </main>
            </div>
        </Wrapper >
    );
};

const Wrapper = styled.div`
    padding: 0;
    margin: 0;

    .layout{
        display: grid;
        grid-template-rows: 50px auto;
        grid-template-areas: 
            "aside header"
            "aside main";
        height: 100vh;

    }
        .hide-Layout{
            grid-template-columns: 50px auto;
        }

        .show-Layout{
            grid-template-columns: 220px auto;
        }

    .header{
        display: flex;
        flex-direction: row;
        align-items: center;
        background: ${color.white};
        grid-area: header;
        position: fixed;
        top: 0;
        height: 20px;
        right: 0;
        padding: 15px;

    }
        .hide-Header{
            width: calc(100% - 80px);
        }

        .show-Header{
            width: calc(100% - 280px);
        }

    .aside{
        background: ${color.azulfuerte};
        grid-area: aside;
        position: fixed;
        color: ${color.white};
        top: 0;
        height: 100vh;
        padding: 50px 15px 15px 15px;

        display: flex;
        flex-direction: column;

    }
        .hide-Aside{
            width: 20px;
        }

        .show-Aside{
            width: 220px;
        }

    /* aside buttons hide */
    .btn-container{
        padding: 20px;
        display: flex;
        align-items: center;
        color: ${color.white};
        cursor: pointer;
        margin: 0 -15px;

        &:hover{
            background: ${color.azulfuerteHover};
            margin: 0 -15px;
        }
    }

    .btn-container-none{
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${color.white};
        cursor: pointer;
        margin: 0 -15px;

        &:hover{
            background: ${color.azulfuerteHover};
            margin: 0 -15px;
        }
    }
        .wrapper-icon{
            margin: 0 10px;
            font-size: ${fontSize.fontIconsGR};
        }

        .wrapper-icon-none{
            margin: 0 10px;
            font-size: ${fontSize.fontIconsGR};
        }

        .wrapper-link{
            text-decoration: none;
        }

        .wrapper-link-none{
            display: none;
        }

    .main{
        background: ${color.grayBackground};
        grid-area: main;

    }
        .hide-Main{
            padding: 15px;
        }

        .show-Main{
            padding: 15px 45px;
        }
`;

const BtnMenuClick = styled.span`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    margin-right: 15px;
    font-size: ${fontSize.fontIconMenu};
    z-index: 300;
    cursor: pointer;
`;

const Button = styled(Link)`
    text-decoration: none;
    color: ${color.white};
    font-size: ${fontSize.fontFooter};
`;

export default Index;