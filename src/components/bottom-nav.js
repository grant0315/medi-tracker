import React from 'react';
import './css/bottom-nav.css';

export default class BottomNav extends React.Component {
    render() {
        return (
            <div className="navbar">
                <a href="#timer">Timer</a>
                <a href="#log">Log</a>
                <a href="#calendar">Calendar</a>
            </div>
        );
    }
}