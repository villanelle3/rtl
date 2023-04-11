import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Testes para o componente principal", () => {
    test("Deve renderizar corretamente", () => {
        render(<App />)
        expect(screen.getByText("Comentar")).toBeInTheDocument()
    })
    test('Deve adicionar "Legal :)" nos comentarios', () => {
        render(<App />)
        fireEvent.change(screen.getByTestId('comentar'), {
            target: {
                value: "Legal :)"
            }
        }) 
        fireEvent.click(screen.getByTestId('btn-comentar'))
        // debug()
        expect(screen.getByText("Legal :)")).toBeInTheDocument()
    })
    test('Deve adicionar "Gostei muito da foto!" nos comentarios', () => {
        render(<App />)
        fireEvent.change(screen.getByTestId('comentar'), {
            target: {
                value: "Gostei muito da foto!"
            }
        }) 
        fireEvent.click(screen.getByTestId('btn-comentar'))
        // debug()
        expect(screen.getByText("Gostei muito da foto!")).toBeInTheDocument()
    })
})