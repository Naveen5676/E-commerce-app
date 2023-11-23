import React, { Fragment } from "react";
import Table from "react-bootstrap/Table";
import classes from "./Home.module.css";
import Button from "./Button";

const Home = () => {
  return (
    <Fragment>
      <div className={classes.bg}>
        <button className={classes.latestalbum}>Get Our Latest Album</button>
        <button className={classes.playbtn}>
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/22C3E6/play--v1.png"
            alt="play--v1"
          />
        </button>
      </div>
      <div className={classes.container}>
        <h1 className={classes.h1}>Tours</h1>
        <Table hover>
          <tbody>
            <tr>
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <Button />
              </td>
            </tr>
            <tr>
              <td>JUL19</td>
              <td>TORONTO,ON</td>
              <td>BUDWEISER STAGE</td>
              <td>
                <Button />
              </td>
            </tr>
            <tr>
              <td>JUL 29</td>
              <td>PHOENIX, AZ</td>
              <td>AK-CHIN PAVILION</td>
              <td>
                <Button />
              </td>
            </tr>
            <tr>
              <td>AUG 2</td>
              <td>LAS VEGAS, NV</td>
              <td>T-MOBILE ARENA</td>
              <td>
                <Button />
              </td>
            </tr>
            <tr>
              <td>AUG 7</td>
              <td>CONCORD, CA</td>
              <td>CONCORD PAVILION</td>
              <td>
                <Button />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};
export default Home;
