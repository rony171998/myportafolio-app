import React from "react";
import { render, screen } from "@testing-library/react";
import ProductPage from "./ProductPage";

describe("ProductPage", () => {
    it("renders ProductPage component", () => {
        render(<ProductPage />);
        expect(screen.queryByText("titulo")).toBeInTheDocument();
    });
    });
