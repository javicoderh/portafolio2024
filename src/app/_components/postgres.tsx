import React from "react";
import PostgresMobileScreen from "./postgresMobile";

const PostgresScreen = () => {
 
return (

    <div className="info">
    <h1 className="hidden md:block horizontal-tit">Postgres</h1>
    <h1 className="hidden md:block vertical-tit">P <br /> O <br /> S <br /> T <br /> G <br /> R <br /> E <br /> S</h1>
    <PostgresMobileScreen />
    <div className="hidden md:block content">
    <p className="hidden md:block text-gray 600 rustp">
          <br />
        Postgres is the only db language i can use by now, and i feel quite comfortable with it, <br />
        i can define database models, conect them into apps, i can query database <br /> to modify tables or get info 
        join tables and relate tables, also i am learning about stored procedures <br />  to increase my action range
        i can connect to postgres databases with every language i know. <br /> 
        <br />
      If you check on the latest project section you will find Vuelca and vuelca <br />
      database was made using postgres 
      </p>
    </div>
  </div>
)}

export default PostgresScreen;