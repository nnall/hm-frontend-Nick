import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  Pagination,
  Card,
  Row,
  Col,
  Form,
  Container,
  Image,
  Button,
  Badge,
} from "react-bootstrap";

import { motion } from "framer-motion";

import comingSoon from "../../assets/images/comingsoon.jpg";
import logo from "../../assets/images/HM_logo.webp";
import "./inventory.css";

import Transition from "../../animatedRoutes";

function Inventory() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [filteredData, setFilteredData] = useState([]);
  const [makeFilter, setMakeFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [bodyFilter, setBodyFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const typeFromQuery = query.get("type");

  //   useEffect(() => {
  //     if (typeFromQuery) {
  //       setBodyFilter(typeFromQuery);
  //     } else {
  //       // set it to default if there's no query string
  //       setBodyFilter("");
  //     }
  //   }, [typeFromQuery]);

  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  //   const locationLabels = {
  //     S01_Holmes1: "Diberville, Ms",
  //     S09_Douglas1: "Douglasville, GA",
  //     S07_Bham1: "Birmingham, AL",
  //     S05_Montgomery1: "Montgomery, AL",
  //   };

  //   const handleLocationFilterChange = (value) => {
  //     // If a model is selected, reset the make filter to "All"
  //     if (value !== "") {
  //       setLocationFilter(""); // Reset the model filter
  //       setLocationFilter(value); // Set the make filter
  //     } else {
  //       setLocationFilter(value); // Set the make filter directly if no model is selected
  //     }
  //   };

  //   const handleMakeFilterChange = (value) => {
  //     // If a model is selected, reset the make filter to "All"
  //     if (value !== "") {
  //       setModelFilter(""); // Reset the model filter
  //       setMakeFilter(value); // Set the make filter
  //     } else {
  //       setMakeFilter(value); // Set the make filter directly if no model is selected
  //     }
  //   };

  //   const handleModelFilterChange = (value) => {
  //     // If a make is selected, reset the model filter to "All"
  //     if (value !== "") {
  //       setMakeFilter(""); // Reset the make filter
  //       setModelFilter(value); // Set the model filter
  //     } else {
  //       setModelFilter(value); // Set the model filter directly if no make is selected
  //     }
  //   };
  //   const handleBodyFilterChange = (value) => {
  //     // If a make is selected, reset the model filter to "All"
  //     if (value !== "") {
  //       setBodyFilter(""); // Reset the make filter
  //       setBodyFilter(value); // Set the model filter
  //     } else {
  //       setBodyFilter(value); // Set the model filter directly if no make is selected
  //     }
  //   };
  // Retrieve Inventory
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      });
  }, []);

  //JUNE EMAIL
  //   useEffect(() => {
  //     axios
  //       .get("https://holmesmotors.com/api/inventory/feed?key=hs78ki34ERs")
  //       .then((response) => {
  //         setData(response.data);
  //       })
  //       .catch((error) => {
  //         console.error(`Error fetching data: ${error}`);
  //       });
  //   }, []);

  //   // Extract unique makes from data
  //   useEffect(() => {
  //     const makes = [...new Set(data.map((item) => item.make))];
  //     setMakesList(makes);
  //   }, [data]);
  //   // Extract unique makes from data
  //   useEffect(() => {
  //     const locations = [...new Set(data.map((item) => item.location))];
  //     setLocationsList(locations);
  //   }, [data]);
  //   // Extract unique models from data
  //   useEffect(() => {
  //     const models = [...new Set(data.map((item) => item.model))];
  //     setModelsList(models);
  //   }, [data]);
  //   // Extract unique class from data
  //   useEffect(() => {
  //     const bodys = [...new Set(data.map((item) => item.body))];
  //     setBodysList(bodys);
  //   }, [data]);

  //   const [makesList, setMakesList] = useState([]);
  //   const [modelsList, setModelsList] = useState([]);
  //   const [bodysList, setBodysList] = useState([]);
  //   const [locationsList, setLocationsList] = useState([]);
  //   const [maxDownPayment, setMaxDownPayment] = useState(15000);

  //   useEffect(() => {
  //     setFilteredData(
  //       data.filter(
  //         (item) =>
  //           item.make.toLowerCase().includes(makeFilter.toLowerCase()) &&
  //           item.model.toLowerCase().includes(modelFilter.toLowerCase()) &&
  //           item.year.toLowerCase().includes(yearFilter.toLowerCase()) &&
  //           item.body.toLowerCase().includes(bodyFilter.toLowerCase()) &&
  //           item.location.toLowerCase().includes(locationFilter.toLowerCase()) &&
  //           item.requireddown <= maxDownPayment
  //       )
  //     );
  //   }, [
  //     makeFilter,
  //     modelFilter,
  //     yearFilter,
  //     maxDownPayment,
  //     bodyFilter,
  //     locationFilter,
  //     data,
  //   ]);
  //   const indexOfLastItem = currentPage * itemsPerPage;
  //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  //   // Render Cards for Inventory
  //   const renderItems = currentItems.map((item, index) => {
  //     console.log("Navigating with stock:", item.stock);
  //     return (
  //       <>
  //         <Col md={3} className="g-1 mt-2">
  //           <Card.Img
  //             variant="top"
  //             className="left img-fluid"
  //             src={
  //               item.photo
  //                 ? `https://holmesmotors.com/${item.photo}`
  //                 : `${comingSoon}`
  //             }
  //             alt={item.class}
  //             style={{ height: "100%" }}
  //           />
  //         </Col>
  //         <Col md={3} className="border-start-0 rounded mt-2 right">
  //           <div id="side-panel">
  //             <Card.Text className="text-light text-center">
  //               {item.year} {item.make}
  //             </Card.Text>
  //             <Card.Title>{item.model}</Card.Title>
  //             <Card.Text>
  //               Stock Number: <Badge variant="light">{item.stock}</Badge>
  //             </Card.Text>
  //             <Card.Text className="text-light small text-center">
  //               ${item.requireddown}.00 Down Payment - ${item.retailprice}.00
  //               Bi-Weekly
  //             </Card.Text>
  //             <Image
  //               src={logo}
  //               alt="logo"
  //               className="text-center img-fluid"
  //               style={{ height: "35px", width: "200px" }}
  //             />
  //           </div>
  //           <div className="mt-5">
  //             <Link
  //               to="/details"
  //               state={{ stock: item.stock }}
  //               className="btn btn-outline-success float-start ms-2 link"
  //             >
  //               See Details
  //             </Link>
  //           </div>
  //         </Col>
  //       </>
  //     );
  //   });
  //   //`
  //   // Render the pagination component
  //   const renderPagination = () => {
  //     let items = [];
  //     const totalPage = Math.ceil(filteredData.length / itemsPerPage);
  //     const leftSide = currentPage - 3;
  //     const rightSide = currentPage + 3;
  //     for (let i = 1; i <= totalPage; i++) {
  //       if (i === 1 || i === totalPage || (i >= leftSide && i <= rightSide)) {
  //         items.push(
  //           <Pagination.Item
  //             key={i}
  //             active={i === currentPage}
  //             onClick={() => setCurrentPage(i)}
  //           >
  //             {i}
  //           </Pagination.Item> //
  //         );
  //       } else if (i === 2 || i === totalPage - 1) {
  //         items.push(<Pagination.Ellipsis />);
  //       }
  //     }
  //     return (
  //       <Container className="d-flex justify-content-center">
  //         <Pagination>{items}</Pagination>
  //       </Container>
  //     );
  //   };

  return (
    // <motion.div
    <div
      className="inventory_container"
      // initial={{ x: "125%" }}
      // animate={{ x: 0 }}
      // exit={{
      //   x: "-100%",
      // }}
      // transition={{ duration: 0.75, ease: [0.175, 0.885, 0.32, 1.275] }}
    >
      <main className="main_inventory">
        <h1>Inventory</h1>
      </main>
    </div>
    // </motion.div>
  );

  //   return (
  //     <div className="App mt-2 mx-auto">
  //       <Button
  //         className="sticky-button mt-3 w-100 btn-warning text-dark"
  //         onClick={handleShow}
  //       >
  //         Filters
  //       </Button>
  //       <header className="App-header">
  //         <Container>
  //           <Offcanvas show={show} onHide={handleClose}>
  //             <Offcanvas.Header closeButton>
  //               <Offcanvas.Title>Holmes Motors</Offcanvas.Title>
  //             </Offcanvas.Header>
  //             <Offcanvas.Body>
  //               <Col md={12} className="cars">
  //                 <Form>
  //                   <Form.Group controlId="filterForm">
  //                     <Form.Label>Filter by Location</Form.Label>
  //                     <Form.Select
  //                       value={locationFilter}
  //                       onChange={(e) =>
  //                         handleLocationFilterChange(e.target.value)
  //                       } // Use the custom handler
  //                     >
  //                       <option value="">All</option>
  //                       {locationsList.slice(0, 4).map((location, index) => (
  //                         <option key={index} value={location}>
  //                           {locationLabels[location] || location}
  //                         </option>
  //                       ))}
  //                     </Form.Select>
  //                     <Form.Label>Filter by Make</Form.Label>
  //                     <Form.Select
  //                       value={makeFilter}
  //                       onChange={(e) => handleMakeFilterChange(e.target.value)} // Use the custom handler
  //                     >
  //                       <option value="">All</option>
  //                       {makesList.map((make, index) => (
  //                         <option key={index} value={make}>
  //                           {make}
  //                         </option>
  //                       ))}
  //                     </Form.Select>
  //                     <Form.Label>Filter by Model</Form.Label>
  //                     <Form.Select
  //                       value={modelFilter}
  //                       onChange={(e) => handleModelFilterChange(e.target.value)} // Use the custom handler
  //                     >
  //                       <option value="">All</option>
  //                       {modelsList.map((model, index) => (
  //                         <option key={index} value={model}>
  //                           {model}
  //                         </option>
  //                       ))}
  //                     </Form.Select>
  //                     <Form.Label>Filter by Body Style</Form.Label>
  //                     <Form.Select
  //                       value={bodyFilter}
  //                       onChange={(e) => handleBodyFilterChange(e.target.value)} // Use the custom handler
  //                     >
  //                       <option value="">All</option>
  //                       {bodysList.map((body, index) => (
  //                         <option key={index} value={body}>
  //                           {body}
  //                         </option>
  //                       ))}
  //                     </Form.Select>
  //                     <Form.Label>Filter by Maximum Down Payment</Form.Label>
  //                     <Form.Control
  //                       className="custom-slider"
  //                       type="range"
  //                       min="0"
  //                       max="15000"
  //                       step="100"
  //                       value={maxDownPayment}
  //                       onChange={(e) =>
  //                         setMaxDownPayment(Number(e.target.value))
  //                       }
  //                       label={maxDownPayment}
  //                     />
  //                   </Form.Group>
  //                   <h3 className="fw-bold text-center">
  //                     $0 - ${maxDownPayment}.00
  //                   </h3>
  //                 </Form>
  //                 <Row className="">{renderPagination()}</Row>
  //               </Col>
  //             </Offcanvas.Body>
  //           </Offcanvas>
  //           <Row mt-2>{renderItems}</Row>
  //         </Container>
  //         {renderPagination()}
  //       </header>
  //     </div>
  //   );
}
// export default Transition(Inventory);

export default Inventory;
