        import React,{useContext,useState,useEffect} from 'react'
        import "./Profile.css"
        import { Button, Card, CardHeader, ListGroup, ListGroupItem, ListGroupItemText, ListGroupItemHeading } from "reactstrap"
        import Sidebar from '../../../components/sidebar/Sidebar'
        import { useNavigate, useParams } from 'react-router-dom'
        import { dataContext } from '../../../components/contextProvider/Contextprovider'
        export default function Profilestudent(){

          const {id}=useParams();       
          const nav = useNavigate();
          const {state } = useContext(dataContext)
          const [form, setForm] = useState({
            email: "",
            imageurl: "",
            phonenumber: "",
            mentor: "",
            dob: "",
            mentorId: "",
            name: "",
            department: "",
            gender: "",
            location: ""
          });

          useEffect(() => {
            let index = state.student.findIndex((value) => value.id === id)
            setForm(state.student[index])
          },[id,state])

          return (
            <div className="row">
              <Sidebar />
              <div className="col-sm-9">
                <div className="row g-0">
                  <Card
                    body
                    className="text-center"
                    style={{
                      width: "100%"
                    }}>
                    <h1> STUDENT Profile</h1>

                    <Card
                      body
                      className="text-center"
                      style={{
                        width: "100%"
                      }}
                    >
                      <Button color="warning" onClick={() => { nav(-1) }} style={{ float: "left", width: "100px" }}>BACK</Button>
                      <CardHeader>
                        Image
                      </CardHeader>
                      <ListGroup flush >

                        {/*name:"",*/}
                        <ListGroupItem className='d-flex justify-content-around'>
                          <ListGroupItemHeading>
                            NAME
                          </ListGroupItemHeading>
                          <ListGroupItemText>
                            {form.name}
                          </ListGroupItemText>
                        </ListGroupItem>


                        {/*department:"",*/}
                        <ListGroupItem className='d-flex justify-content-around'>
                          <ListGroupItemHeading>
                            year/ department
                          </ListGroupItemHeading>
                          <ListGroupItemText>
                            {form.department}
                          </ListGroupItemText>
                        </ListGroupItem>


                        {/*dob:"",*/}

                        <ListGroupItem className='d-flex justify-content-around'>
                          <ListGroupItemHeading>
                            Date of birth
                          </ListGroupItemHeading>
                          <ListGroupItemText>
                            {form.dob}&nbsp;(yyyy-mm-dd)
                          </ListGroupItemText>
                        </ListGroupItem>

                        {/* gender:"",*/}
                        <ListGroupItem className='d-flex justify-content-around'>
                          <ListGroupItemHeading>
                            Gender
                          </ListGroupItemHeading>
                          <ListGroupItemText>
                            {form.gender}
                          </ListGroupItemText>
                        </ListGroupItem>
                        {/* phonenumber : "",*/}
                        <ListGroupItem className='d-flex justify-content-around'>
                          <ListGroupItemHeading>
                            Phonenumber
                          </ListGroupItemHeading>
                          <ListGroupItemText>
                            {form.phonenumber}
                          </ListGroupItemText>
                        </ListGroupItem>


                        {/*email : "",*/}
                        <ListGroupItem className='d-flex justify-content-around'>
                          <ListGroupItemHeading>
                            email
                          </ListGroupItemHeading>
                          <ListGroupItemText>
                            {form.email}
                          </ListGroupItemText>
                        </ListGroupItem>



                        {/*location:"",*/}
                        <ListGroupItem className='d-flex justify-content-around'>
                          <ListGroupItemHeading>
                            location
                          </ListGroupItemHeading>
                          <ListGroupItemText>
                            {form.location}
                          </ListGroupItemText>
                        </ListGroupItem>
                        {/* mentor:"",*/}
                        <ListGroupItem className='d-flex justify-content-around'>
                          <ListGroupItemHeading>
                            MENTOR
                          </ListGroupItemHeading>
                          <ListGroupItemText>
                            {form.mentor}
                          </ListGroupItemText>
                        </ListGroupItem>
                        {/* experience*/}
                        <ListGroupItem className='d-flex justify-content-around'>
                          <ListGroupItemHeading>
                            mentorId
                          </ListGroupItemHeading>
                          <ListGroupItemText>
                            {form.mentorId}
                          </ListGroupItemText>
                        </ListGroupItem>

                      </ListGroup>
                    </Card>
                  </Card>
                </div>
              </div>
            </div>
          )
        }
