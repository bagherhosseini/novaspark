import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import './shop.scss';
import { products } from '../../services';

function valuetext(value) {
    return value;
}

function isNumber(value) {
    if (isNaN(Number(value))) return false;
    return typeof Number(value) === 'number';
}

export default function Shop() {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const [searchParams, setSearchParams] = useSearchParams({
        minPrice: Math.min(...products.map(product => product.price)),
        maxPrice: Math.max(...products.map(product => product.price)),
        bottle350: true,
        bottle450: true,
        bottle600: true,
    });

    const checked = [searchParams.get("bottle350") === "true", searchParams.get("bottle450") === "true", searchParams.get("bottle600") === "true"];

    const handleChange = (event, newValue) => {
        setSearchParams(
            prev => {
                prev.set('minPrice', newValue[0]);
                prev.set('maxPrice', newValue[1]);
                return prev;
            },
            { replace: true }
        );
    };

    const handleChange1 = (event) => {
        setSearchParams(
            prev => {
                prev.set('bottle350', event.target.checked);
                prev.set('bottle450', event.target.checked);
                prev.set('bottle600', event.target.checked);
                return prev;
            },
            { replace: true }
        );
    };

    const handleChange2 = (event) => {
        setSearchParams(
            prev => {
                prev.set('bottle350', event.target.checked);
                return prev;
            },
            { replace: true }
        );
    };

    const handleChange3 = (event) => {
        setSearchParams(
            prev => {
                prev.set('bottle450', event.target.checked);
                return prev;
            },
            { replace: true }
        );
    };

    const handleChange4 = (event) => {
        setSearchParams(
            prev => {
                prev.set('bottle600', event.target.checked);
                return prev;
            },
            { replace: true }
        );
    };

    useLayoutEffect(() => {
        if (!isNumber(searchParams.get("minPrice")) || !isNumber(searchParams.get("maxPrice"))) {
            setSearchParams(
                prev => {
                    prev.set('minPrice', Math.min(...products.map(product => product.price)));
                    prev.set('maxPrice', Math.max(...products.map(product => product.price)));
                    return prev;
                },
                { replace: true }
            );
        }
    }, [searchParams, setSearchParams]);

    useEffect(() => {
        setFilteredProducts(products.filter(product => product.price >= Number(searchParams.get("minPrice")) && product.price <= Number(searchParams.get("maxPrice")) && ((checked[0] && product.size === 350) || (checked[1] && product.size === 450) || (checked[2] && product.size === 600))));
    }, [searchParams]);

    return (
        <div className='shop'>
            <div className='background'>
                <h2>All Products</h2>
                <div className='filter-products'>
                    <aside>
                        <div className='section'>
                            <h3>Browse by</h3>
                            <hr />
                            <FormControlLabel
                                label="All Bottles"
                                control={
                                    <Checkbox
                                        checked={checked[0] && checked[1] && checked[2]}
                                        onChange={handleChange1}
                                        style={{
                                            color: "#CCCBC4",
                                        }}
                                    />
                                }
                            />
                            <FormControlLabel
                                label="Bottles 350ml"
                                control={<Checkbox
                                    checked={checked[0]}
                                    onChange={handleChange2}
                                    style={{
                                        color: "#CCCBC4",
                                    }}
                                />}
                            />
                            <FormControlLabel
                                label="Bottles 450ml"
                                control={<Checkbox
                                    checked={checked[1]}
                                    onChange={handleChange3}
                                    style={{
                                        color: "#CCCBC4",
                                    }}
                                />}
                            />
                            <FormControlLabel
                                label="Bottles 600ml"
                                control={<Checkbox
                                    checked={checked[2]}
                                    onChange={handleChange4}
                                    style={{
                                        color: "#CCCBC4",
                                    }}
                                />}
                            />
                        </div>

                        <div className='section price'>
                            <h3>Filter by</h3>
                            <hr />
                            <p>Price</p>
                            <div className='priceRange'>
                                <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={[Number(searchParams.get("minPrice")), Number(searchParams.get("maxPrice"))]}
                                    onChange={handleChange}
                                    valueLabelDisplay="off"
                                    getAriaValueText={valuetext}
                                    style={{
                                        color: "#CCCBC4",
                                    }}
                                />
                                <div className='value'>
                                    <p>$ {searchParams.get("minPrice")}</p>
                                    <p>$ {searchParams.get("maxPrice")}</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <div className='products'>
                        {filteredProducts.map((product) => (
                            <a href={`./shop/product/${product.id}`} key={product.id} className='product'>
                                <img src={product.images[0]} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>$ {product.price}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
