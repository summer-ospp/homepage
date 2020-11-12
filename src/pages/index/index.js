/**
 * Copyright (c) 2020 Intelligent Software Research Center of ISCAS
 * Summer 2020 Homepage is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *          http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
 * MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */

import React from 'react'
import './index.less';
import data from './data.js'

export default class Index extends React.Component{
    constructor(props){
       super(props)
       this.state ={
        data
       }
    }

 


    render(){
       
        return(         
            <div className="index">
                <div className="indexBanner">
                   <div className="content1200 indexBannerWrapper">
                   <div className="indexText"></div>
                   <div className="indexButton">
                       <span className="indexButtonText">暑期2020回顾</span>
                   </div>
                   </div>
                </div>
                <div className="indexOne">
                   <div className="content1200">
                   <div className="indexOneTitle">
                        <span className="indexOneTitleText">暑期2021 日程规划</span>
                    </div>
                    <div className="indexOneList">
                        {
                            this.state.data.time.map((item,index)=>{
                                return (
                                    <div className={["indexOneListLine", index%2 === 0 ? 'left':'right'].join(" ")}  key={index}>
                                        <div className="indexOneListItem" >
                                            <div className="indexOneListItemTitle">{item.title}</div>
                                            <div className="indexOneListItemTime">{item.time}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>


                   </div>
                </div>

                <div className="indexTwo">
                    <div className="content1200">
                        <div className="indexOneTitle">
                            <span className="indexOneTitleText">官方联系方式</span>
                        </div>
                        <div className="indexTwoWrapper">
                            <div className="indexTwoText">如果您有暑期2021的合作活动合作意向，欢迎与我们联系!</div>
                            <div className="indexTwoBlue">
                                <span>官方邮箱 summer@iscas.ac.cn</span>
                            </div>
                        </div>
                    </div>
                   
                    

                </div>

            </div>
         )
       
        
        
    }
}