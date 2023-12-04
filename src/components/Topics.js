import React from 'react'
import TopicTitle from './TopicTitle'

function Topics() {
    return (
        <div className="my-10">
            <h1 className="text-center text-4xl">
                Select Topic To Start The Quiz
            </h1>
            <div className='container w-10/12'>
                <div className="row">
                    <div className='col-4'>
                        <TopicTitle title="Devops" url="./assets/Devops.jpg" />
                    </div>
                    <div className='col-4'>
                        <TopicTitle title="Cloud" url="./assets/Cloud.webp" />
                    </div>
                    <div className='col-4'>
                        <TopicTitle title="Linux" url="./assets/linux.jpeg" />
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                        <TopicTitle title="Networking" url="./assets/Networking.jpg" />
                    </div>
                    <div className='col'>
                        <TopicTitle title="Programming" url="./assets/Programming.webp" />
                    </div>
                    <div className='col'>
                        <TopicTitle title="Docker" url="./assets/Docker.png" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Topics