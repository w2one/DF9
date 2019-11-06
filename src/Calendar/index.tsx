/**
 * @author Jay
 * @date 2019-8-5
 * @description calendar
 * 12313
 */

import * as React from "react";
import "./style";

/**
 * 构建日历数组
 * @param {*} date
 */
function fnGenereateCalendar(firstWeek = 0, date = new Date()) {
    date = new Date(date);
    let tempDate = new Date();
    // const day = date.getDate();
    // 当前时间
    const tempYear = tempDate.getFullYear();
    const tempMonth = tempDate.getMonth();
    const tempDay = tempDate.getDate();
    // 传入的时间
    const dataYear = date.getFullYear();
    const dateMonth = date.getMonth();
    // const dateDay = date.getDate();
    let arr = [];
    if (dataYear == tempYear && tempMonth == dateMonth) {
        let weekday;
        //这个月的第一天是周几
        if (firstWeek === 0) {
            weekday = new Date(date.setDate(1)).getDay();
        } else {
            weekday = (new Date(date.setDate(1)).getDay() + 6) % 7;
        }

        // 这个月有多少天
        const monthDays = getDaysByMonth(date.getMonth() + 1);
        console.log(monthDays);
        // 构建出数组
        arr = [];
        // 补全前面上个月天数
        for (let i = 0; i < weekday; i++) {
            arr.push({ day: "" });
        }
        // 构建数据
        for (let i = 1; i <= monthDays; i++) {
            // debugger;
            // vo
            const vo = {
                day: i,
                weekday: weekday,
                today: i === tempDay,
                choose: false
            };
            // 添加进数组
            arr.push(vo);

            weekday++;
            if (weekday == 7) {
                weekday = 0;
            }

            if (firstWeek !== 0) {
                weekday = (weekday + 6) % 7;
            }
        }
        return arr;
    } else {
        let weekday;
        //这个月的第一天是周几
        if (firstWeek === 0) {
            weekday = new Date(date.setDate(1)).getDay();
        } else {
            weekday = (new Date(date.setDate(1)).getDay() + 6) % 7;
        }
        // 这个月有多少天
        const monthDays = getDaysByMonth(date.getMonth() + 1);
        // console.log(monthDays);
        // 构建出数组
        // var arr = [];
        // 补全前面上个月天数
        for (let i = 0; i < weekday; i++) {
            arr.push({ day: "" });
        }
        // 构建数据
        for (let i = 1; i <= monthDays; i++) {
            // debugger;
            // vo
            const vo = {
                day: i,
                weekday: weekday,
                today: i == 1,
                choose: false
            };
            // 添加进数组
            arr.push(vo);

            weekday++;
            if (weekday == 7) {
                weekday = 0;
            }

            if (firstWeek !== 0) {
                weekday = (weekday + 6) % 7;
            }
        }
        return arr;
    }
}
/**
 * 根据月份获取当月天数
 * @param {月份} month
 */
function getDaysByMonth(month: number) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            var year = new Date().getFullYear();
            return year % 400 == 0 || (year % 100 != 0 && year % 4 == 0) ? 29 : 28;
        default:
            break;
    }
}

/**
 *
 */
interface IProps {
    data: Array<object>;
    firstWeek?: number;
}

/**
 * 日历
 * IProps 日期
 */
export class Calendar extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            data: [],
            firstWeek: props.firstWeek || 0
        };
    }

    componentDidMount() {
        const data = fnGenereateCalendar(this.state.firstWeek);
        console.log(data);
        this.setState({ data });
    }

    render() {
        const { data, firstWeek } = this.state;
        return (
            <div className="calender">
                <div className="title">
                    {firstWeek === 0 ? (
                        <>
                            <div className="week">日</div> <div>一</div>
                            <div>二</div>
                            <div>三</div>
                            <div>四</div>
                            <div>五</div>
                            <div className="week">六</div>
                        </>
                    ) : (
                            <>
                                <div> 一</div>
                                <div>二</div>
                                <div>三</div>
                                <div>四</div>
                                <div>五</div>
                                <div className="week">六</div>
                                <div className="week">日</div>
                            </>
                        )}
                </div>
                <div className="content">
                    {data.map(
                        (item: { day: React.ReactNode }, index: string | number) => (
                            <div key={index} className="item">
                                {item.day}
                            </div>
                        )
                    )}
                </div>
            </div>
        );
    }
}

export default Calendar;
