import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Room from '../videoRoom/Room'
import "./routes.css";

export default function Routes() {
  return (
    <div className="body-height">
      <Route exact path="/" component={Dashboard} />
      <Route path='/room/:creator' component={Room} />
    </div>
  );
}
