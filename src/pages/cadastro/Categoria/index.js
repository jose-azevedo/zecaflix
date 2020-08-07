import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000000',
  };
  const [categoryValues, setCategoryValues] = useState(initialValues);
  const [categoryList, setNewCategory] = useState([]);

  function handleChange(eventInfo) {
    setCategoryValues({
      ...categoryValues,
      [eventInfo.target.getAttribute('name')]: eventInfo.target.value,
    });
  }

  useEffect(() => {
    console.log('TESTANO');
    const URL = 'http://localhost:8010/categories';
    fetch(URL).then(async (res) => {
      const jsonRes = await res.json();
      setNewCategory([...jsonRes]);
    })
  }, []);

  return (
    <>
      <PageDefault>
        <h1>
          {' '}
          Cadastro de Categoria:
          {categoryValues.name}
        </h1>

        <form onSubmit={function handleSubmit(eventInfo) {
          eventInfo.preventDefault();
          setNewCategory([...categoryList, categoryValues]);
          setCategoryValues(initialValues);
        }}
        >
          <FormField type="text" name="name" label="Nome da categoria: " value={categoryValues.name} onChange={handleChange} />

          <FormField type="text" as="textarea" name="description" label="Descrição: " value={categoryValues.description} onChange={handleChange} />

          <FormField type="color" name="color" label="Cor: " value={categoryValues.color} onChange={handleChange} />

          <Button as= "button">
            Cadastrar
          </Button>
        </form>

        <ul>
          {categoryList.map((category, index) => (
            <li key={`${category.name}${index}`}>{category.name}</li>
          ))}
        </ul>
        <Link to="/">
          Ir para Home
        </Link>
      </PageDefault>
    </>
  );
}
export default CadastroCategoria;
