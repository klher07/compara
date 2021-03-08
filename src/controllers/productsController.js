const controller = {};
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM products', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('products', {
        data: customers
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body.name)
  if(req.body.name!='' && req.body.sellIn!='' && req.body.price!=''){
      req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO products set ?', data, (err, customer) => {
          console.log(customer)
          res.redirect('/');
        })
      })
  }else{  
        res.redirect('/');
  }
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM products WHERE id = ?", [id], (err, rows) => {
      res.render('products_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE products set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM products WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

controller.resultados = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM products', (err, products) => {
     if (err) {
      res.json(err);
     }
     res.render('resultados', {
        data: products
     });
    });
  });
}
module.exports = controller;
