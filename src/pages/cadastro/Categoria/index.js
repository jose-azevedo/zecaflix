import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categories from '../../../repos/categories'

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000000',
  };
  const [categoryList, setNewCategory] = useState([]);
  
  const { categoryValues, handleChange, clearForm} = useForm(initialValues);
  
  useEffect(() => {
    categories.getAllWithVideos()
    .then((categoriesWithVideos) => {
      setNewCategory([...categoriesWithVideos]);
    });
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
          clearForm();
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
