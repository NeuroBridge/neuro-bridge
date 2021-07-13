import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import placeHolder from "/Users/ishanpatel/Downloads/learning-react/neuro-bridges/src/components/Assets/testImage.jpg";

class IntelectualMerrit extends Component {
  render() {
    return (
      <Row>
        <Col className="m-auto" sm={3}>
          <Image className="m-auto" src={placeHolder} fluid roundedCircle />
        </Col>
        <Col>
          <h3>Intelectual Merrit</h3>
          <p>
            The NeuroBridge intellectual merit derives from the depth, breadth
            and impact of the sharing of the data resources it enables and in
            the strength of the combination of both new and existing techniques
            it will use to make that sharing effective. We have identified a
            core collection of important neuroimaging databases which will be
            augmented by our integration with XNAT and with the use of advanced
            machine learning techniques to search the domain literature for
            additional datasets. This enhanced corpus of datasets will achieve
            breadth within clinical neuroscience research: our community
            includes research across a broad spectrum of clinical neuroscience
            domains (e.g., mental health, aging and dementia, lifespan). It also
            achieves depth: data included in these resources include
            comprehensive phenotypes per study subject (e.g., multiple imaging
            modalities such MRI, PET, CT, EEG/MEG, and clinical, cognitive,
            behavior, genomic data on any given subject). The technologies used
            in the NeuroBridge system leverage prior NSF/NIH funded efforts:
            ontology-based mediation of neuroimaging databases, metadata quality
            assurance through harmonization, ontology-guided statistical
            text-mining and deep learning of journal articles to identify
            candidate studies and identification of similar but relevant
            datasets through query-by- similarity. Importantly, metadata is the
            sole information returned from searching. This allows, for the
            purpose of search, bypassing practical restrictions that limit data,
            such as consent, privacy, and institutional policies and allows
            researchers to negotiate access only for useful datasets.
          </p>
        </Col>
      </Row>
    );
  }
}

export default IntelectualMerrit;
