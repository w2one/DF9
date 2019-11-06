import * as React from 'react'
import { Calendar } from "../../src";

export class CalendarDemo extends React.Component {
    render() {
        return (
            <div>
                <Calendar data={[]} firstWeek={1} />
            </div>
        )
    }
}

export default CalendarDemo
