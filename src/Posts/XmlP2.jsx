import React from 'react';
import axios from 'axios';
import XMLData from '../blog_post_example.xml';
import { useEffect, useState } from 'react'
import XMLParser from 'react-xml-parser';


const Xml = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        getXmlData();
    }, [])
    let result;
    const getXmlData = async () => {
        const response = await axios.get(XMLData, {
            "Content-Type": "application/xml; charset=utf-8"
        })
        var xml = new XMLParser().parseFromString(response.data);
        let x = xml.children[1].children;
        setBlogs(x)

    }
    return (
        <div className='main'>
            {
                blogs.map((children) => {
                    let y = children.name.toUpperCase();
                    if (y === 'SUMMARY') {
                        const childData = children.children.map(z => {
                            return z.value
                        })
                        return (
                            <>
                                <div className='posts'>
                                    <p ><img src={`${childData[0]}`}></img></p>
                                </div>
                                <p>{childData[1]}</p>
                                <h4>{y}:</h4>
                            </>
                        )
                    }
                    else {
                        return (
                            <div>
                                <div className='posts'>
                                    <h4>{y}:</h4>
                                    <p>{children.value} </p>
                                </div>
                            </div>
                        )
                    }
                })

            }
        </div>
    );
}



export default Xml
