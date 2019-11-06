import * as React from "react";
import { CalendarMonth } from "../../src";

export class CalendarContainer extends React.Component {
    state = {
        day: new Date(),
        data: []
    };

    componentDidMount() {
        this.fnCombineData({});
    }

    /**
     * combile data
     */
    fnCombineData = obj => {
        console.log("combine data-----", obj);
        let data = [];
        // day
        for (let index = 1; index <= 7; index++) {
            let arr = [];
            // hour
            for (let i = 0; i <= 19; i++) {
                arr.push({ index: index + "-" + i });
            }
            data.push(arr);
        }

        this.setState({
            data
        });
    };

    /**
     * click
     */
    fnClickItem = ({ dayIndex, hourIndex, day, hour }) => {
        console.log(dayIndex, hourIndex, day, hour);
        // call api
        const { data } = this.state;
        data[dayIndex][hourIndex].flag = !data[dayIndex][hourIndex].flag;
        this.setState({ data });
    };

    render() {
        const { data, day } = this.state;
        return (
            <CalendarMonth
                data={data}
                day={day}
                // onChangeDate={this.fnChangeDate}
                onClickItem={this.fnClickItem}
            />
        );
    }
}

export default CalendarContainer;
