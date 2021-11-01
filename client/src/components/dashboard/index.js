import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  Card,
  CardContainer1,
  CardContainer2,
  CardContainer3,
  CardItem,
  CardItemMode,
  CardTableTitle,
  CardText,
  Container,
  Content,
  ContentCointainer1,
  ContentCointainer2,
  ContentCointainer3,
  HumidityIcon,
  IconContainer1,
  IconContainer2Green,
  IconContainer2Grey,
  IconContainer2Red,
  IconContainer3,
  Page,
  PowerIcon,
  SyncIcon,
  Table,
  TableContainer,
  TableDesc,
  TableTitle,
  Td,
  TemperatureIcon,
  TextLabel,
  TextMode,
  TextModeValue,
  TextValue,
  Th,
  Tr
} from './DashboardStyled';

const Dashboard = ({
  apiGetState,
  apiUpdateMode,
  apiUpdateMotor1,
  apiUpdateHumidifier1,
  apiUpdateMotor2,
  apiUpdateHumidifier2
}) => {

  const [stateValue, setStateValue] = useState({
    state_temperature1: '',
    state_humidity1: '',
    state_relaymotor1: '',
    state_relayhumidifier1: '',
    state_temperature2: '',
    state_humidity2: '',
    state_relaymotor2: '',
    state_relayhumidifier2: '',
    state_mode: ''
  });

  useEffect(() => {
    // getStateData();
  });

  const putStateModeHandler = () => {
    if (stateValue.state_mode === 'automatic') {
      Axios.put(apiUpdateMode, {
        state_mode: 'manual'
      });
    } else {
      Axios.put(apiUpdateMode, {
        state_mode: 'automatic'
      });
    }
  };

  const updateMotor1Handler = () => {
    if (stateValue.state_relaymotor1 === 1) {
      Axios.put(apiUpdateMotor1, {
        state_relaymotor1: 0
      });
    } else {
      Axios.put(apiUpdateMotor1, {
        state_relaymotor1: 1
      });
    }
  };

  const updateMotor2Handler = () => {
    if (stateValue.state_relaymotor2 === 1) {
      Axios.put(apiUpdateMotor2, {
        state_relaymotor2: 0
      });
    } else {
      Axios.put(apiUpdateMotor2, {
        state_relaymotor2: 1
      });
    }
  };

  const updateHumidifier1Handler = () => {
    if (stateValue.state_relayhumidifier1 === 1) {
      Axios.put(apiUpdateHumidifier1, {
        state_relayhumidifier1: 0
      });
    } else {
      Axios.put(apiUpdateHumidifier1, {
        state_relayhumidifier1: 1
      });
    }
  };

  const updateHumidifier2Handler = () => {
    if (stateValue.state_relayhumidifier2 === 1) {
      Axios.put(apiUpdateHumidifier2, {
        state_relayhumidifier2: 0
      });
    } else {
      Axios.put(apiUpdateHumidifier2, {
        state_relayhumidifier2: 1
      });
    }
  };

  const getStateData = () => {
    setInterval(() => {
      Axios.get(apiGetState).then((result) => {
        setStateValue(result.data[0]);
      });
    }, 1000);
  };

  return (
    <>
      <Page>
        <Container>
          <Content>
            <ContentCointainer1>
              <Card>
                <CardContainer1>
                  <CardText>
                    <TextLabel>Temperature 1</TextLabel>
                    <TextValue>{stateValue.state_temperature1}°C</TextValue>
                  </CardText>
                  <IconContainer1>
                    <TemperatureIcon />
                  </IconContainer1>
                </CardContainer1>
              </Card>

              <Card>
                <CardContainer1>
                  <CardText>
                    <TextLabel>Humidity 1</TextLabel>
                    <TextValue>{stateValue.state_humidity1}%</TextValue>
                  </CardText>
                  <IconContainer1>
                    <HumidityIcon />
                  </IconContainer1>
                </CardContainer1>
              </Card>

              <Card>
                <CardContainer1>
                  <CardText>
                    <TextLabel>Temperature 2</TextLabel>
                    <TextValue>{stateValue.state_temperature2}°C</TextValue>
                  </CardText>
                  <IconContainer1>
                    <TemperatureIcon />
                  </IconContainer1>
                </CardContainer1>
              </Card>

              <Card>
                <CardContainer1>
                  <CardText>
                    <TextLabel>Humidity 2</TextLabel>
                    <TextValue>{stateValue.state_humidity2}%</TextValue>
                  </CardText>
                  <IconContainer1>
                    <HumidityIcon />
                  </IconContainer1>
                </CardContainer1>
              </Card>
            </ContentCointainer1>

            <ContentCointainer2>
              <Card>
                <CardContainer2>
                  <CardItem>
                    <CardText>
                      <TextLabel>Motor Fan 1</TextLabel>
                      <TextValue>
                        {stateValue.state_relaymotor1 === 1 ? 'On' : 'Off'}
                      </TextValue>
                    </CardText>

                    {stateValue.state_mode === 'automatic' ? (
                      <IconContainer2Grey>
                        <PowerIcon />
                      </IconContainer2Grey>
                    ) : stateValue.state_relaymotor1 === 1 ? (
                      <IconContainer2Green onClick={updateMotor1Handler}>
                        <PowerIcon />
                      </IconContainer2Green>
                    ) : (
                      <IconContainer2Red onClick={updateMotor1Handler}>
                        <PowerIcon />
                      </IconContainer2Red>
                    )}
                  </CardItem>

                  <CardItem>
                    <CardText>
                      <TextLabel>Humidifier 1</TextLabel>
                      <TextValue>
                        {stateValue.state_relayhumidifier1 === 1 ? 'On' : 'Off'}
                      </TextValue>
                    </CardText>

                    {stateValue.state_mode === 'automatic' ? (
                      <IconContainer2Grey>
                        <PowerIcon />
                      </IconContainer2Grey>
                    ) : stateValue.state_relayhumidifier1 === 1 ? (
                      <IconContainer2Green onClick={updateHumidifier1Handler}>
                        <PowerIcon />
                      </IconContainer2Green>
                    ) : (
                      <IconContainer2Red onClick={updateHumidifier1Handler}>
                        <PowerIcon />
                      </IconContainer2Red>
                    )}
                  </CardItem>
                </CardContainer2>
              </Card>

              <Card>
                <CardContainer2>
                  <CardItem>
                    <CardText>
                      <TextLabel>Motor Fan 2</TextLabel>
                      <TextValue>
                        {stateValue.state_relaymotor2 === 1 ? 'On' : 'Off'}
                      </TextValue>
                    </CardText>

                    {stateValue.state_mode === 'automatic' ? (
                      <IconContainer2Grey>
                        <PowerIcon />
                      </IconContainer2Grey>
                    ) : stateValue.state_relaymotor2 === 1 ? (
                      <IconContainer2Green onClick={updateMotor2Handler}>
                        <PowerIcon />
                      </IconContainer2Green>
                    ) : (
                      <IconContainer2Red onClick={updateMotor2Handler}>
                        <PowerIcon />
                      </IconContainer2Red>
                    )}
                  </CardItem>

                  <CardItem>
                    <CardText>
                      <TextLabel>Humidifier 2</TextLabel>
                      <TextValue>
                        {stateValue.state_relayhumidifier2 === 1 ? 'On' : 'Off'}
                      </TextValue>
                    </CardText>

                    {stateValue.state_mode === 'automatic' ? (
                      <IconContainer2Grey>
                        <PowerIcon />
                      </IconContainer2Grey>
                    ) : stateValue.state_relayhumidifier2 === 1 ? (
                      <IconContainer2Green onClick={updateHumidifier2Handler}>
                        <PowerIcon />
                      </IconContainer2Green>
                    ) : (
                      <IconContainer2Red onClick={updateHumidifier2Handler}>
                        <PowerIcon />
                      </IconContainer2Red>
                    )}
                  </CardItem>
                </CardContainer2>
              </Card>

              <Card>
                <CardContainer2>
                  <CardItemMode>
                    <TextMode>
                      Mode:
                    </TextMode>

                    <TextModeValue>
                      {stateValue.state_mode}
                    </TextModeValue>
                  </CardItemMode>

                  <CardItemMode>
                    <IconContainer3 onClick={putStateModeHandler}>
                      <SyncIcon />
                    </IconContainer3>
                  </CardItemMode>
                </CardContainer2>
              </Card>
            </ContentCointainer2>

            <ContentCointainer3>
              <Card>
                <CardContainer3>
                  <CardTableTitle>
                    <TableTitle>History Data</TableTitle>
                    <TableDesc>Showing 10 rows data</TableDesc>
                  </CardTableTitle>

                  <TableContainer>
                    <Table>
                      <Tr>
                        <Th>No</Th>
                        <Th>Time</Th>
                        <Th>Temperature 1</Th>
                        <Th>Humidity 1</Th>
                        <Th>Temperature 2</Th>
                        <Th>Humidity 2</Th>
                      </Tr>
                      <Tr>
                        <Td>1</Td>
                        <Td>23:59</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                      </Tr>
                      <Tr>
                        <Td>1</Td>
                        <Td>23:59</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                      </Tr>
                      <Tr>
                        <Td>1</Td>
                        <Td>23:59</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                      </Tr>
                      <Tr>
                        <Td>1</Td>
                        <Td>23:59</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                      </Tr>
                      <Tr>
                        <Td>1</Td>
                        <Td>23:59</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                      </Tr>
                      <Tr>
                        <Td>1</Td>
                        <Td>23:59</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                      </Tr>
                      <Tr>
                        <Td>1</Td>
                        <Td>23:59</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                      </Tr>
                      <Tr>
                        <Td>1</Td>
                        <Td>23:59</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                      </Tr>
                      <Tr>
                        <Td>1</Td>
                        <Td>23:59</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                      </Tr>
                      <Tr>
                        <Td>1</Td>
                        <Td>23:59</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                        <Td>30</Td>
                        <Td>60%</Td>
                      </Tr>
                    </Table>
                  </TableContainer>
                </CardContainer3>
              </Card>
            </ContentCointainer3>
          </Content>
        </Container>
      </Page>
    </>
  );
};

export default Dashboard;
