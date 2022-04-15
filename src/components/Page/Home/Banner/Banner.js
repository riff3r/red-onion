import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import banner from "../../../../assets/images/bannerbackground.png";

const Banner = () => {
  return (
    <div className="position-relative ">
      <img className="img-fluid" src={banner} alt="" />

      <div className="position-absolute top-50 start-50 translate-middle">
        <h2 className="mb-4 fs-1">Best food waiting for your belly</h2>
        <InputGroup className="">
          <FormControl
            className="border-0"
            placeholder="Search food item"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />

          <Button className="" variant="danger" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Banner;
