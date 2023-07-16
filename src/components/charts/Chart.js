import React from 'react'
import Donut from "./Donut"
import Bar from './Bar'
import "./Chart.css"
import {Card} from "reactstrap"
export default function Chart() {
    return (
        <div className="row g-0">
            <div className="col-lg-6">
                <Card
                    body
                    className="text-center"
                    style={{
                        width: "100%"
                    }}
                >
                <Bar/>
                </Card>
            </div>
            <div className="col-lg-6">
                <Card
                    body
                    className="text-center"
                    style={{
                        width: "100%"
                    }}
                >
                <Donut/>
                </Card>
            </div>
        </div>
    )
}
