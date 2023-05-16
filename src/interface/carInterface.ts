export interface ICar{
    id: number,
    name: string,
    price: number,
    photo: string
}

export interface ICarsData{
    cars: ICar[]
}

export interface ICarsSingle{
    car: ICar
}