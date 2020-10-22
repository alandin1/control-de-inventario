class Producto {
    constructor(codigo, producto, descripcion, cantidad, costo){
        this.codigo = codigo
        this.producto = producto
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.costo = costo
    }
}

class Almacen{
    constructor(){
        this.capacidad = []
        this.CapacidadMax = 20
    }
    agregarProducto(producto){
        if(this.capacidad.length > this.CapacidadMax){
            return "Almacen lleno"
        }else{
            this.capacidad.push(producto)
        }
    }

    borrarProductoID(idProducto){
        for(let i = 0; i<this.capacidad.length; i++){
            if(idProducto == this.capacidad[i].codigo){
                let eliminado = this.capacidad[i].producto
                this.capacidad.splice(i, 1)
                return `Producto eliminado: ${eliminado}`
            }
        }
    }

    buscarProductoID(idProducto){
        for(let i = 0; i<this.capacidad.length; i++){
            if(idProducto == this.capacidad[i].codigo){
                return `Producto encontrado: ${this.capacidad[i].producto}`
            }
        }
    }

    listarProductos(){
        for(let i = 0; i<this.capacidad.length; i++){
            if(this.capacidad[i] !== undefined){
                console.log(`${i}: ${this.capacidad[i].producto}`)
            }
        }
    }

    listarProductosInverso(){
        for(let i = this.capacidad.length-1; i>=0; i--){
            if(this.capacidad[i] !== undefined){
                console.log(`${i}: ${this.capacidad[i].producto}`)
            }
        }
    }

    insertarProducto(producto, posicion){
        if(posicion>this.capacidad.length || this.capacidad.length >= this.CapacidadMax){
            return `${posicion} es un numero muy alto o el almacen está lleno`
        }else{
            if(posicion==this.capacidad.length){
                this.capacidad[posicion] = producto
                return `${producto.producto} ha sido añadido`
            }
            let productoAct
            let sigProducto = producto
            for(let i = posicion; i<this.capacidad.length; i++){
                productoAct = this.capacidad[i]
                this.capacidad[i] = sigProducto
                sigProducto = productoAct
            }
            this.capacidad[this.capacidad.length] = sigProducto
            return `${producto.producto} ha sido añadido` 
        }
        
    }
}

let producto1 = new Producto(1,"Arroz","Arrozito rico", 30, 10)
let producto2 = new Producto(2,"Pan","Pan rico", 20, 5)
let producto3 = new Producto(3,"Elote","Elote rico", 25, 8)
let producto4 = new Producto(4,"Nito","Nito rico", 10, 10)
let almacen = new Almacen()
almacen.agregarProducto(producto1)
almacen.agregarProducto(producto2)
almacen.agregarProducto(producto3)
console.log()
almacen.insertarProducto(producto4,0)
almacen.listarProductos()
almacen.listarProductosInverso

console.log(almacen)
