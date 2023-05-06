
import React, { useRef } from "react";
// react plugin used to create charts
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import TableFilter from "react-table-filter";
import about from "assets/img/dashboard.avif";
import home from "assets/img/homePage.webp";
import axios from 'axios';
import gify from 'assets/img/loading1.gif'
import gify1 from 'assets/img/loadingspinner.gif'
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';
import 'jspdf-autotable';
import { toDataURL } from 'chart.js';
// reactstrap components
import {
  Button,
  FormGroup,
  Form,
 
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import Modal from 'react-modal';

import Select from 'react-select';
import { useState ,useEffect} from "react";

import ReactHtmlTableToExcel from 'react-html-table-to-excel';
import { DownloadTableExcel } from "react-export-table-to-excel";
import { CSVLink } from "react-csv";
const initialValues = {
  title: "",
  // projectName: "",
  description: ""
};
const order = { blocker: 1, critical: 2, major: 3, normal: 4, trivial: 5, minor: 6 ,enhancement:7 };
const orderPriority = { High: 1,Medium: 2, Low: 3 };
function Dashboard() {
  const [visible, setVisible] = useState(false);
  const [loading, setloading] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
 

  const reset = () => {
    setVisible(!visible);
  }
  const redCell = {
    color: 'red',
    fontWeight: 'bold'
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }
  const validate = () => {
    let errors = {};
    
    if (!values.title.trim()) {
      errors.title = "Title is required";
    }
  
    if (!values.description.trim()) {
      errors.description = "Description is required";
    }
  
    return errors;
  }
 
    const handleClick = async(e) =>{
    
      // setDisplayText(values);
      e.preventDefault();
      setloading(true)
      const errors = validate();
      setErrors(errors);
      if (Object.keys(errors).length === 0) {
        // make API call or submit form
        await axios({
          method:'post',
          url:"http://localhost:5000/send",
          headers: {'content-type': 'application/json'},
          data:values
        })
            .then(result => {
              // setData(prevState => [...prevState, result.data])
              // setData([...data, result.data]);
              // const x= true;
              // setVisible(x);
              // setloading(false);
              if (result.data.message) {
                setError(result.data.message);
                setloading(false)
              } else {
                
              //   setLoggedIn(true);
              //   setUser(response.data);
                setData(prevState => [...prevState, result.data])
                // setData([...data, result.data]);
                const x= true;
                setVisible(x);
                setloading(false);
                setError('');
              }
             
          
              // setDisplayText(resultValue);
              // console.log(result.config.data)
            })
            .catch(error=> {
              console.log(error);
            })
      }


       
          
    }
    data.sort(function (a, b) {
      if (a.priority === b.priority)
        return order[a.severity] - order[b.severity];
      else 
        return orderPriority[a.priority] - orderPriority[b.priority];
        // return order[a.severity] - order[b.severity];
    });
    console.log(data)
    function resetForm(ev) {
      ev.preventDefault();
      setValues(initialValues);
    }
    const dataArray = Object.values(data.reduce((obj, item) => {
      obj[item.severity] = obj[item.severity] || { severity: item.severity, count: 0 };
      obj[item.severity].count++;       
      return obj;}, {}))
      
    console.log(dataArray)
    const priorityCountArray = Object.values(data.reduce((obj, item) => {
      obj[item.priority] = obj[item.priority] || { priority: item.priority, count: 0 };
      obj[item.priority].count++;       
      return obj;}, {}))
      
    console.log(priorityCountArray)
    const { count: minor = 0 } = dataArray.find(item => item.severity === 'minor') || {};
    console.log(minor)
    const { count: trivial = 0 } = dataArray.find(item => item.severity === 'trivial') || {};
    const { count: major = 0 } = dataArray.find(item => item.severity === 'major') || {};
    const { count: critical = 0 } = dataArray.find(item => item.severity === 'critical') || {};
    const { count: blocker = 0 } = dataArray.find(item => item.severity === 'blocker') || {};
    const { count: normal = 0 } = dataArray.find(item => item.severity === 'normal') || {};
    const { count: enhancement = 0 } = dataArray.find(item => item.severity === 'enhancement') || {};
  
    const { count: high = 0 } = priorityCountArray.find(item => item.priority === 'High') || {};
    const { count: medium = 0 } = priorityCountArray.find(item => item.priority === 'Medium') || {};
    const { count: low = 0 } = priorityCountArray.find(item => item.priority === 'Low') || {};
    // Calculate total sum of values
    // const severityValues = dataArray.map(obj => obj.severity);
    const severityValues = Array.from(new Set(data.map((row) => row.severity)));
    const priorityValues = Array.from(new Set(data.map((row) => row.priority)));
    const [selectedValue, setSelectedValue] = useState('All');
    const [severityfilter, setseverityfilter] = useState('');
    const [selectedPriorityValue, setSelectedPriorityValue] = useState('All');
    const [hovered, setHovered] = useState(false);
    const [hoveredPriority, setHoveredPriority] = useState(false);
   
    console.log(severityValues)
    var total = data.length;
    
    const [filteredData, setFilteredData] = useState(data);
    const tableRef = useRef(null);
    const handleFilterUpdate = (filteredData) => {
      setFilteredData(filteredData);
    };

  
    // Create an object to count occurrences of each combination of severity and priority
    const counts = {};
    data.forEach(({ severity, priority }) => {
      if (!counts[severity]) counts[severity] = {};
      if (!counts[severity][priority]) counts[severity][priority] = 0;
      counts[severity][priority]++;
    });

    // Create arrays of the unique severity and priority values
    // const severities = Object.keys(counts);
    // const priorities = Array.from(
    //   new Set(severities.flatMap(s => Object.keys(counts[s])))
    // );
    const priorities = ['High', 'Medium', 'Low'];
    const severities = ['critical', 'blocker', 'major', 'normal', 'trivial', 'minor','enhancement'];
    const table = {};
    for (const severity of severities) {
      table[severity] = {};
      for (const priority of priorities) {
        table[severity][priority] = 0;
      }
    }
  
    // Update the table with the actual counts from the data array
    for (const item of data) {
      const severity = item.severity;
      const priority = item.priority;
      table[severity][priority]++;
    }
   
    const severityBarChart  = {
      data: (canvas) => {
        return {
         
          // labels: ['minor', 'trivial', 'major', 'critical', 'blocker', 'normal','enhancement'],
          labels: ['critical', 'blocker', 'major', 'normal', 'trivial', 'minor','enhancement'],
          datasets: [
            {
              // label: ['critical', 'blocker', 'major', 'normal', 'trivial', 'minor','enhancement'],
              // data: [minor, trivial, major, critical, blocker, normal,enhancement],
              data: [critical, blocker, major, normal, trivial, minor,enhancement],
              
              backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                'rgba(255,0,255,0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.3)',
                'rgba(255, 205, 86, 0.3)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(75, 192, 192, 0.3)',

              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
               
               
               
              ],
              borderWidth: 1,
            },
          ],
        };
      },
      options: {
        plugins: {
          legend: { 
            labels:{
              font:{size:15}
            },
            display: false
          },
          tooltip: {
            callbacks: {
              // label: function (tooltipItem, data) {
              //   // var label = data.labels[tooltipItem.index];
              //   var value=data.datasets[1]
              //   // var value = data.datasets[0].data[tooltipItem.index];
              //   // var total = data.datasets[0].data.reduce((a, b) => a + b, 0);
              //   // var percentage = ((value / total) * 100).toFixed(2) + '%';
              //   // return ` ${value} (${percentage})`;
              //   return `${value}`
              // },
            },
          }
        },
     
       
        indexAxis: 'x',
          scales: {
            y: {
              ticks: {
                beginAtZero: true,
                precision: 0
              }
            }
          },
          maintainAspectRatio: false,
          title: {
            display: false
          },
          legend: {
            display: false
          }
      }
    };
    const priorityBarChart  = {
      data: (canvas) => {
        return {
         
          labels: ['High', 'Medium', 'Low'],
          // labels: priorityCountArray.map(result => result.priority),
          datasets: [
            {
              label: "",
              // data: priorityCountArray.map(result => result.count),
              data: [high,medium,low],
              // data: [highPercentage, mediumPercentage, lowPercentage],
              backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                
                
                'rgba(255, 205, 86, 0.3)',
                
                'rgba(75, 192, 192, 0.3)',

              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                
              
                'rgba(255, 206, 86, 1)',
             
                'rgba(75, 192, 192, 1)',
               
               
               
              ],
              borderWidth: 1,
              
            },
          ],
        };
      },
      options: {
        plugins: {
          legend: { 
            labels:{
              font:{size:15}
            },
            display: false
          },
          tooltip: {
            callbacks: {
              // label: function (tooltipItem, data) {
              //   // var label = data.labels[tooltipItem.index];
              //   var value=data.datasets[1]
              //   // var value = data.datasets[0].data[tooltipItem.index];
              //   // var total = data.datasets[0].data.reduce((a, b) => a + b, 0);
              //   // var percentage = ((value / total) * 100).toFixed(2) + '%';
              //   // return ` ${value} (${percentage})`;
              //   return `${value}`
              // },
            },
          }
        },
        
       
          indexAxis: 'x',
          scales: {
            y: {
              ticks: {
                beginAtZero: true,
                precision: 0
              }
            }
          },
          maintainAspectRatio: false,
          title: {
            display: false
          },
          legend: {
            display: false
          }
        //   pieceLabel: {
        //   render: "percentage",
        //   fontColor: ['black', 'black', 'black'],
        //   precision: 2
        // },
        },
      
        
    };
   
      
      

    const exportToPDF = () => {
      // create a new jsPDF instance
      const doc = new jsPDF();
      doc.setFontSize(18); // set the font size
      doc.setFont("helvetica", "bold"); // set the font type and weight
      doc.text("BUGCLASSIFIER SUMMARY REPORT", 10, 10); // add the main title
      doc.setFontSize(14); // set the font size for the subtitle
      doc.setFont("helvetica", "normal"); // set the font type and weight for the subtitle
      
      doc.text("BUG Details Table",10,20);
            const headers = [["Bug Id", "Bug Title", "Bug Description", "Severity", "Priority"]];
          const dataTable = data.map((row, index) => [index+1, row.title, row.description, row.severity, row.priority]);

          let content = {
            startY: 30,
            head: headers,
            body: dataTable,
            columnWidth: [10, 40, 80, 20, 20] // set column widths
          };

          doc.autoTable(content);
      const promises = [];
      // add the first pie chart to the PDF
      const chart1 = document.getElementById('chart1');
      promises.push(html2canvas(chart1).then(canvas => {
        const chart1Dims = chart1.getBoundingClientRect();
        doc.addImage(canvas.toDataURL("image/png"), "PNG", chart1Dims.x, chart1Dims.y, chart1Dims.width, chart1Dims.height);
      }));
    
      // add the second pie chart to the PDF
      const chart2 = document.getElementById('chart2');
      promises.push(html2canvas(chart2).then(canvas => {
        const chart2Dims = chart2.getBoundingClientRect();
        doc.addImage(canvas.toDataURL("image/png"), "PNG", chart2Dims.x, chart2Dims.y, chart2Dims.width, chart2Dims.height);
      }));
    
      const chartMaxHeight = doc.internal.pageSize.height - doc.autoTable.previous.finalY - 40;
      const tableEndPosY = doc.autoTableEndPosY();
      html2canvas(chart1).then(canvas1 => {
        html2canvas(chart2).then(canvas2 => {
          const chart1Url = canvas1.toDataURL();
          const chart2Url = canvas2.toDataURL();
          const chart1Height = canvas1.height;
          const chart2Height = canvas2.height;
          // if (tableEndPosY + chart1Height +10>= doc.internal.pageSize.height) {
          //   doc.addPage();
          // }
          const chartsHeight = canvas1.height + canvas2.height;
          if (chartMaxHeight < chartsHeight) {
           
          
            // add the charts to a new page
            doc.addPage();
            doc.setFontSize(14); // set the font size for the subtitle
            doc.setFont("helvetica", "normal"); // set the font type and weight for the subtitle
            doc.text("Statistics", 10, 20); // add the subtitle
            doc.addImage(chart1Url, 'JPG', 10, 30, 100, 100);
            doc.addImage(chart2Url, 'JPG', 120, 30, 100, 100);
          }else{
            doc.addImage(chart1Url, 'JPG', 10, doc.autoTable.previous.finalY + 20, 100, 100);
            doc.addImage(chart2Url, 'JPG', 120, doc.autoTable.previous.finalY + 20, 100, 100);
          }
          
          // add a new line after the charts
          // doc.text("")
          
          // add the two way table
          const tableColumns = [''];
          priorities.forEach((priority) => tableColumns.push(priority));
          const tableData = severities.map((severity) => {
            const row = [severity];
            priorities.forEach((priority) => {
              row.push(`${table[severity][priority]}`);
            });
            return row;
          });
      
          doc.autoTable({
            head: [tableColumns],
            body: tableData,
            startY: 150  ,
          });
          // save the PDF
          Promise.all(promises).then(() => {
            doc.save("BUGCLASSIFIER Report.pdf");
          });
        });
      });
    };
  return (
   
   
    <>
     
       <div className="content">
        <Row>
              <Col md="12">
                
                
                <Card className="card-user">
                  <CardHeader>
                    <CardTitle tag="h5">Create Issue</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form  onSubmit={handleClick}>
                      <Row>
                        <Col className="pr-1" md="12">
                          <FormGroup>
                            <label tag="h5">Defect Title</label>
                            <GrammarlyEditorPlugin clientId={process.env.REACT_APP_GRAMMARLY_CLIENT_ID}config={{ activation: "immediate" }}>
                              <Input
                              
                              name="title" 
                              placeholder="Issue Title"
                              type="text"
                              value={values.title}
                              onChange={handleInputChange}
                              />
                            </GrammarlyEditorPlugin>
                            {errors.title && <div className="text-danger">{errors.title}</div>}
                          </FormGroup>
                        </Col>
                      
                      
                      </Row>
                      <Row>
                        <Col className="pr-1" md="12">
                          <FormGroup>
                            <label>Defect Description</label>
                            <GrammarlyEditorPlugin clientId={process.env.REACT_APP_GRAMMARLY_CLIENT_ID}config={{ activation: "immediate" }}>
                            <Input
                              defaultValue=""
                              name="description" 
                              placeholder="Description"
                              type="textarea"
                              // value={text} 
                              // onChange={e => handleChange(e)}
                              value={values.description}
                              onChange={handleInputChange}
                            />
                            </GrammarlyEditorPlugin>
                            {errors.description && <div className="text-danger">{errors.description}</div>}
                        
                          </FormGroup>
                        </Col>
                      
                      </Row>

                      <Row>
                        <div className="update ml-auto mr-auto">
                          <Button
                            className="btn-round"
                            color="primary"
                            type="submit"
                            
                          >
                            submit
                          </Button>
                          <Button
                            className="btn-round"
                            color="primary"
                            onClick={resetForm}
                            
                          >
                            Reset
                          </Button>
                          
                        </div>
                      </Row>
                    </Form>
                  </CardBody>
                  <CardFooter>
                  {loading && 
                      <div  >

                          
                          <img style={{ display: "block",  margin: "0 auto", Width: "10rem", height: "auto" }} src={gify1} alt="loading..." />
                         
                      </div>
                    
                    }
                     {error && <div className="text-danger">{error}</div>}
                  </CardFooter>
                </Card> 
              </Col>
        </Row>

    
            
        
        
        {visible  &&  
        <div >
          <Row id="table1">
            <Col md="12">
              <Card>
                <CardHeader>
                  <Row>
                  <Col md="10">
                  <CardTitle tag="h4">Bug Reports</CardTitle>
                  </Col>
                  <Col md="2">
                 
                  {/* <CSVLink data={data} filename={"report.csv"} target="_blank"> */}
                        <Button className="btn-sm " color="primary" onClick={exportToPDF}>
                              <i className="fa fa-file-export" /> Export 
                         </Button>
                  {/* </CSVLink> */}
                  </Col>
                  
                    
                  </Row>
                  
                </CardHeader>
                <CardBody>
                    
                      
                      <Table responsive ref={tableRef}>
                        <thead className="text-primary">
                          
                            <tr>
                              
                                <th>Bug Id</th>
                                <th>Bug Title</th>
                                <th>Bug Description</th>
                                <th>
                                    <div className="filter-header" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                      Severity
                                      <i className="fa fa-filter" aria-hidden="true" ></i>
                                    </div>
                                    {hovered && (
                                     
                                        <div className="filter-dropdown" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                                          <select value={selectedValue} onChange={(e) =>{setseverityfilter("severity"); setSelectedValue(e.target.value)  }}>
                                            <option value="All">All</option>
                                            {severityValues.map((value, index) => (
                                              <option key={index} value={value}>{value}</option>
                                            ))}
                                          </select>
                                        </div>
                                      
                                    
                                    )}
                                  
                                </th>
                                <th >
                                    <div className="filter-header" onMouseEnter={() => setHoveredPriority(true)} onMouseLeave={() => setHoveredPriority(false)}>
                                    Priority
                                      <i className="fa fa-filter" aria-hidden="true" ></i>
                                    </div>
                                    {hoveredPriority && (
                                      <div className="filter-dropdown" onMouseEnter={() => setHoveredPriority(true)} onMouseLeave={() => setHoveredPriority(false)}>
                                        <select value={selectedPriorityValue} onChange={(e) =>{setseverityfilter("priority"); setSelectedPriorityValue(e.target.value)}}>
                                          <option value="All">All</option>
                                          {priorityValues.map((value, index) => (
                                            <option key={index} value={value}>{value}</option>
                                          ))}
                                        </select>
                                      </div>
                                    )}
                                </th>
                               
                            </tr>
                          
                        </thead>
                        <tbody>
                        
                      
                          {/* {
                            data.map((data, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.title}</td>
                                    <td>{data.description}</td>
                                    <td>{data.severity}</td>
                                    <td>{data.priority}</td>
                              
                                </tr>
                            ))
                          } */}
                           {data.filter((row) => {
                              // if (severityfilter === 'severity')
                                return (selectedValue === 'All' && selectedPriorityValue === 'All') ||( row.severity === selectedValue  || row.priority === selectedPriorityValue) ;
                              // if (severityfilter === 'priority')
                              //   return selectedPriorityValue === 'All' || row.priority === selectedPriorityValue ;
                            }).map((filteredRow, index) => {
                              return (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{filteredRow.title}</td>
                                  <td>{filteredRow.description}</td>
                                  <td>{filteredRow.severity}</td>
                                  <td>{filteredRow.priority}</td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </Table>
                    
                </CardBody>
              </Card>
            </Col>
            
          </Row>

          <Row>
            <Col md="6" id="chart1">
              <Card >
                <CardHeader>
                  <CardTitle tag="h5">Severity</CardTitle>
                  <p className="card-category">Statistics</p>
                </CardHeader>
                <CardBody style={{ height: "266px" }}>
                  <Bar
                    data={severityBarChart.data}
                    options={severityBarChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-s1" /> Blocker
                    <i className="fa fa-circle text-s2" />Critical
                    <i className="fa fa-circle text-s3" /> Major
                    <i className="fa fa-circle text-s4" /> Normal
                    <i className="fa fa-circle text-s5" /> Trivial
                    <i className="fa fa-circle text-s6" /> Minor
                    <i className="fa fa-circle text-s7" />Enhancement
                
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" /> Count of the Bug severity Bugs
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="6" id="chart2">
              <Card >
                <CardHeader>
                  <CardTitle tag="h5">Priority</CardTitle>
                  <p className="card-category">Statistics</p>
                </CardHeader>
                <CardBody style={{ height: "266px" }}>
                  <Bar
                    data={priorityBarChart.data}
                    options={priorityBarChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-s1" />High
                  
                    <i className="fa fa-circle text-s5" /> Medium
                    
                    <i className="fa fa-circle text-s7" />Low
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" /> Count of the Bug Priority 
                  </div>
                </CardFooter>
              </Card>
            </Col>
           
          </Row>

          <Row>
            <Col md="12" id="table2" >
              <Card>
                <CardHeader>
                  <Row>
                  <Col md="10">
                  <CardTitle tag="h4">Statistics</CardTitle>
                  <p className="card-category">Count </p>
                  </Col>
                
                  
                    
                  </Row>
                  
                </CardHeader>
                <CardBody>
                    <div className="TwoayTable">
                    <Table>
                        <thead className="text-primary">
                        <tr>
                            <th></th>
                            {/* {priorities.map(p => (
                              <th key={p}>{p}</th>
                            ))} */}
                            {priorities.map(priority => (
                              <th key={priority} className="text-center">{priority}</th>
                            ))}
                        </tr>
                           
                          
                        </thead>
                        <tbody>
                        
                              {severities.map(severity => (
                                <tr key={severity}>
                                  <th>{severity}</th>
                                  {priorities.map(priority => (
                                    // <td key={priority}>{table[severity][priority]}</td>
                                    <td key={priority} className="text-center" style={table[severity][priority] > 0 ? redCell : null }>
                                      {table[severity][priority]} 
                                    </td>
                                  ))}
                                  
                                </tr>
                              ))}
                        </tbody>
                      </Table>
                    
                    </div>
                      
                      
                </CardBody>
              </Card>
            </Col>
            
          </Row>
        </div>
          
          
        }
       
       </div>
    </>
   
  );
}

export default Dashboard;
