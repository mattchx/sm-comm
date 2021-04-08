import { useState } from 'react';
import { useFormik } from 'formik';
import { Button, TextField, Card, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 480,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PageForm = () => {
  const [submitted, setSubmitted] = useState();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      question: '',
    },
    // validationSchema: validationSchema, && values.question
    onSubmit: (values) => {
        if (values.name && values.email ) {
            setSubmitted(values);
        } else {
            setSubmitted(); 
        }
      formik.resetForm();
    },
  });

  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '80vh' }}
    >
      <div>
        <Card elevation={5} className={classes.root}>
          <form onSubmit={formik.handleSubmit}>
            <CardContent>
              <h3>Ask a question</h3>
              <Grid container justify="space-between">
                <TextField
                  style={{ paddingRight: 15 }}
                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

              <TextField
                fullWidth
                id="question"
                name="question"
                label="Question"
                value={formik.values.question}
                onChange={formik.handleChange}
                error={
                  formik.touched.question && Boolean(formik.errors.question)
                }
                helperText={formik.touched.question && formik.errors.question}
              />
            </CardContent>
            <CardActions>
              <Button style={{ margin: "0 0 15px 10px" }} color="default" variant="contained" type="submit">
                Submit
              </Button>
            </CardActions>
          </form>
        </Card>
        {submitted && <Paper style={{ marginTop: 25, padding: 10 }}>
        <h4>You've successfully submitted the following:</h4>
        <p>Name: {submitted.name}</p>
        <p>Email: {submitted.email}</p>
        {submitted.question && <p>Question: {submitted.question}</p>}
        </Paper>}
      </div>
    </Grid>
  );
};

export default PageForm;
