import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WelcomeSlides from "./Carousel.jsx";

class Welcome extends Component {
  render() {
    return (
      <>
        <WelcomeSlides />
        <Container>
          <Row>
            <Col>
              <h3>Project Summary</h3>
              <p>
                Replication, mega analysis, and meta-analysis are critical to
                the advancement of neuroimaging research. However, these are
                costly and time-consuming processes, and the subjects and data
                are usually not similar across studies, making actual
                replication or meta- analysis challenging. The question is how
                to harness already-collected data for replication purposes
                efficiently and rigorously. Progress in this goal depends not
                only on advanced experimental and computational techniques, but
                on the timely availability and discoverability of the most
                useful datasets. Much of the present efforts on reproducibility
                science assumes that appropriate datasets are available. While
                many different neuroimaging databases exist, they have different
                languages, formats, and usually do not communicate with each
                other. Moreover, neuroimaging data are collected in hundreds of
                laboratories each year, forming the “long tail of science” data.
                Much of this data are described in journal publications but
                remain underutilized. A critical gap therefore exists in getting
                enough data of the right kind to the scientist. This problem
                motivates the NeuroBridge: A Data Sharing infrastructure that
                combines innovative techniques and established technologies in a
                platform that will greatly enhance the reuse of critical
                neuroscience data sets.
              </p>
            </Col>
            <Col sm={3}>
              <h4>
                This is where the image for Project Summary is going to go
              </h4>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <h4>
                This is where the image for Intelectual Merrit is going to go
              </h4>
            </Col>
            <Col>
              <h3>Intelectual Merrit</h3>
              <p>
                The NeuroBridge intellectual merit derives from the depth,
                breadth and impact of the sharing of the data resources it
                enables and in the strength of the combination of both new and
                existing techniques it will use to make that sharing effective.
                We have identified a core collection of important neuroimaging
                databases which will be augmented by our integration with XNAT
                and with the use of advanced machine learning techniques to
                search the domain literature for additional datasets. This
                enhanced corpus of datasets will achieve breadth within clinical
                neuroscience research: our community includes research across a
                broad spectrum of clinical neuroscience domains (e.g., mental
                health, aging and dementia, lifespan). It also achieves depth:
                data included in these resources include comprehensive
                phenotypes per study subject (e.g., multiple imaging modalities
                such MRI, PET, CT, EEG/MEG, and clinical, cognitive, behavior,
                genomic data on any given subject). The technologies used in the
                NeuroBridge system leverage prior NSF/NIH funded efforts:
                ontology-based mediation of neuroimaging databases, metadata
                quality assurance through harmonization, ontology-guided
                statistical text-mining and deep learning of journal articles to
                identify candidate studies and identification of similar but
                relevant datasets through query-by- similarity. Importantly,
                metadata is the sole information returned from searching. This
                allows, for the purpose of search, bypassing practical
                restrictions that limit data, such as consent, privacy, and
                institutional policies and allows researchers to negotiate
                access only for useful datasets.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Broader Impact</h3>
              <p>
                NeuroBridge impacts Information Science and Engineering by
                enabling and improving discovery of relevant scientific data
                across large, distributed and diverse collections. NeuroBridge
                will also provide an easy means of publishing metadata and
                incentivize data producers to do so by enabling collaboration
                and citation. The concepts developed in the project –
                semantically linking data through socio-metric network analysis
                from a wide variety of domain datasets - will have an impact on
                data collections outside the biomedical field, such as
                geoscience, political science, and have the potential to
                effectively improve access and discovery of scientific data. We
                will engage the broader community through workshops collocated
                with national and international conferences such as the
                Organization for the Human Brain Mapping and the International
                Neuroinformatics Coordinating Facility (INCF) Congress.
              </p>
            </Col>
            <Col sm={3}>
              <h3>This is where the image for Broader Impact is going</h3>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Welcome;
