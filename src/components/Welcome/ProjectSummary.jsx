import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import placeHolder from "../Assets/testImage.jpg";

class ProjectSummary extends Component {
  render() {
    return (
      <Row>
        <Col>
          <h3>Project Summary</h3>
          <p>
            Replication, mega analysis, and meta-analysis are critical to the
            advancement of neuroimaging research. However, these are costly and
            time-consuming processes, and the subjects and data are usually not
            similar across studies, making actual replication or meta- analysis
            challenging. The question is how to harness already-collected data
            for replication purposes efficiently and rigorously. Progress in
            this goal depends not only on advanced experimental and
            computational techniques, but on the timely availability and
            discoverability of the most useful datasets. Much of the present
            efforts on reproducibility science assumes that appropriate datasets
            are available. While many different neuroimaging databases exist,
            they have different languages, formats, and usually do not
            communicate with each other. Moreover, neuroimaging data are
            collected in hundreds of laboratories each year, forming the “long
            tail of science” data. Much of this data are described in journal
            publications but remain underutilized. A critical gap therefore
            exists in getting enough data of the right kind to the scientist.
            This problem motivates the NeuroBridge: A Data Sharing
            infrastructure that combines innovative techniques and established
            technologies in a platform that will greatly enhance the reuse of
            critical neuroscience data sets.
          </p>
        </Col>
        <Col sm={3} className="m-auto">
          <Image src={placeHolder} fluid thumbnail />
        </Col>
      </Row>
    );
  }
}

export default ProjectSummary;
