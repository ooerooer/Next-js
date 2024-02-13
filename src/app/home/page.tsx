"use client";
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Option1 from './option1';
import Option2 from './option2';
import Option3 from './option3';

const Home = () => {
    type Link = {
        id: number;
        title: string;
    };

    const [links, setLinks] = useState<Array<Link>>([
        { id: 1, title: "option1" },
        { id: 2, title: "option2" },
        { id: 3, title: "option3" },
    ]);

    const [activeId, setActiveId] = useState<number | null>(null);

    const setActive = (id: number) => {
        localStorage.setItem("id", id.toString());
        setActiveId(id);
    }

    return (
        <div className='container'>
            <div className="row mt-4">
                <div className='col-md-3'>
                    {
                        links.map((item) => {
                            return (
                                <li key={item.id} className='list-none'>
                                    <button className='btn btn-primary my-2 shadow-xl' onClick={() => setActive(item.id)}>{item.title}</button>
                                </li>
                            );
                        })
                    }
                </div>

                <div className="col-md-8 bordered shadow-xl h-[700px] rounded-xl">
                    {activeId === 1 && <Option1 />}
                    {activeId === 2 && <Option2 />}
                    {activeId === 3 && <Option3 />}
                </div>
            </div>
        </div>
    );
}

export default Home;