import React from 'react'
import CapabilitiesCard from '../../../components/CapabilitiesCard';
import taskManagement from "../../../assets/taskManagement.webp";
const Frame1 = () => {
  return (
    <div className="frame1">
      <div className="main">
        <div className="tipbar">
          <span>🔥</span> Premier features
        </div>
        <div className="head">
          <div className="title">
            Discover our product's <span>Capabilities</span>
          </div>
          <div className="desc">
            Don't settle for mediocrity - embrace the future of management with
            Manage Wise.
          </div>
        </div>
      </div>

      <div className="capabilities">
        <div className="row1">
          <div className="col1">
            <div className="star">⭐️</div>
            <div className="details">
              Boost productivity and streamline workflow with us. Enjoy our
              intuitive interface and robust features.
            </div>
          </div>
          <div className="col2">
            <CapabilitiesCard
              img={taskManagement}
              title="Smart Task Management"
              desc="Say goodbye to chaos with our smart task management system"
            />
          </div>
        </div>
        <div className="row2">
          <div className="card">
            <CapabilitiesCard
              img={taskManagement}
              title="Smart Task Management"
              desc="Say goodbye to chaos with our smart task management system"
            />
          </div>
          <div className="card">
            <CapabilitiesCard
              img={taskManagement}
              title="Smart Task Management"
              desc="Say goodbye to chaos with our smart task management system"
            />
          </div>
          <div className="card">
            <CapabilitiesCard
              img={taskManagement}
              title="Smart Task Management"
              desc="Say goodbye to chaos with our smart task management system"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame1