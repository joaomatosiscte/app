import React, {useState, useEffect} from "react";

export default function App() {

  return (
    <React.Fragment>
      <div className="jumbotro pt-5 pb-5">
        <div className="container text-left">
          <h1 className="display-4">Project, front-end application!</h1>
          <p className="lead">This document/sample presents the struture for the front-end practical work for the ADAD course evaluation.</p>
          <hr className="my-4" />
          <p>Armazenamento de dados em ambientes distribuidos (ADAD) | Mestrado em Engenharia de Telecomunicações e Informática (METI)</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/movies" role="button">Movies &rarr;</a>
            <a className="btn btn-primary btn-lg ms-1" href="/users" role="button">Users &rarr;</a>
          </p>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row mb-5">
          <div className="col-md-4">
            <h2>Requirements for evaluation</h2>
            <ul>
              <li>Create /users page</li>
              <li>Create /user:id page</li>
              <li>Create /movie:id page</li>
              <li>Inside /user:id page create button to delete user from database</li>
              <li>Save a digital transaction proof of a rating</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>Assessment components</h2>
            <p>Group report on the work done by each student of the group;<br/>
            Application developed;<br/>
            Slides, demonstration and oral discussion with individual questions from the teacher.</p>
          </div>
          <div className="col-md-4">
            <h2>Delivery dates</h2>
            <p><span className="text-decoration-underline">Frontend Project upload</span> (development and report) on Moodle by <strong>2nd of December at 23h59</strong>;<br/>
            <span className="text-decoration-underline">Part 2 slides</span> - (for 10 minutes presentation) upload on Moodle by the <strong>4th of December 2023 at 23h59</strong>;<br/>
            <span className="text-decoration-underline">Part 2 slides presentation</span>, demo and answering to questions of the second part of the project (Frontend) - <strong>5th of December 2023</strong>. This same day there will be an individual written test (counting for 45%).</p>
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="pb-3 mb-4 font-italic border-bottom">Digital Wallet (Leather)</h3>
          <div className="col-sm-6">
            <ul className="list-group">
              <li className="list-group-item">1. <a href="">Install the extension for Chrome, Brave or Firefox</a></li>
              <li className="list-group-item">2. Open extension in your browser</li>
              <li className="list-group-item">3. Select "Create a new wallet"</li>
              <li className="list-group-item">4. If you've selected "Create a wallet", follow the instructions provided to generate and save a 24-word Secret Key.</li>
              <li className="list-group-item">5. Change Network to "Testnet"</li>
              <li className="list-group-item">6. <a href="https://explorer.hiro.so/sandbox/faucet?chain=testnet">Request STX from faucet.</a></li>
            </ul>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}