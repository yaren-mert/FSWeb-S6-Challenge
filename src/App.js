import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Label,
  Input,
  FormGroup,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [open, setOpen] = useState("0");
  const [page, setPage] = useState("1");
  const [pages, setPages] = useState([]);
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const totalPages = [];
  function pageSetter(page) {
    setPage(page);
  }
  function searchData(param) {
    setSearch(param);
  }
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/?page=" + page)
      .then((response) => {
        setData(response.data.results);
        let totalPage = response.data.count / response.data.results.length;
        for (let i = 1; i <= totalPage; i++) {
          totalPages.push(i);
        }
        setPages(totalPages);
      })
      .catch((err) => console.log(err));
  }, [page]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <FormGroup>
        <Label for="exampleSearch">Search</Label>
        <Input
          onChange={(event) => searchData(event.target.value)}
          id="exampleSearch"
          name="search"
          placeholder="search placeholder"
          type="search"
        />
      </FormGroup>
      <Accordion open={open} toggle={toggle}>
        {data
          .filter((item) => {
            if (search === "") {
              return item;
            } else {
              return item.name.toLowerCase().includes(search.toLowerCase());
            }
          })
          .map((item, index) => (
            <AccordionItem>
              <AccordionHeader targetId={index.toString()}>
                {item.name}
              </AccordionHeader>
              <AccordionBody accordionId={index.toString()}>
                <p>Gender: {item.gender}</p>
                <p>Height: {item.height}</p>
                <p>Mass: {item.mass}</p>
                <p>BirthYear: {item.birth_year}</p>
                <p>HairColor: {item.hair_color}</p>
                <p>EyeColor: {item.eye_color}</p>
                <p>SkinColor: {item.skin_color}</p>
              </AccordionBody>
            </AccordionItem>
          ))}
      </Accordion>
      <Pagination>
        {pages.map((item) => (
          <PaginationItem onClick={() => pageSetter(item)}>
            <PaginationLink>{item}</PaginationLink>
          </PaginationItem>
        ))}
      </Pagination>
    </div>
  );
};
export default App;
