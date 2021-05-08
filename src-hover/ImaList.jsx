import { React, useState, Fragment } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.scss'

import SliderTest from './SliderTest'

export default function ImaList() {

    

    const imgList = [
        {
            tag: 'rcc：快速生成class',
            seed: 'https://picsum.photos/400/300?random=10'
        },
        {
            tag: 'rfc：快速生成func',
            seed: 'https://picsum.photos/400/300?random=20'
        },
        {
            tag: 'crtl+v : 大學生神器',
            seed: 'https://picsum.photos/400/300?random=30'
        },
        {
            tag: 'stackverFlow 是工程師救星',
            seed: 'https://picsum.photos/400/300?random=40'
        }
        ,
        {
            tag: 'stackverFlow 是工程師救星',
            seed: 'https://picsum.photos/400/300?random=50'
        }

    ]

    const [click, setclick] = useState(true)


    function chgFontColor() {
        setclick((click) => { return !click })
    }


    const fontColor = click ? '#ccc' : '#ff0'

    return (
        <Fragment>

            <div className="wrap">
                <div className="imglist">
                    {imgList.map(i => (
                        <dir className="item" key={i.seed}>
                            <img src={i.seed} alt="" />
                            <h2 className="txt" onClick={chgFontColor} style={{ color: fontColor, transition: 'color 0.5s' }}>
                                {i.tag}
                            </h2>
                        </dir>
                    ))
                    }
                </div>

                <SliderTest imgList={imgList}/>             

            </div>

        </Fragment>

    )
}
