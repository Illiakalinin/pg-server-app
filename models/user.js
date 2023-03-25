class User {
  static async create ({ firstName, lastName, email, tel }) {
    //прописати sql запит

    const insertQuery = `
    INSERT INTO users (first_name, last_name, email, tel)
    VALUES (${firstName}, ${lastName}, ${email}, ${tel})
    RETURNING *;
    `;
    try {
      // виконати запит
      const createdUser = await User.pool.query(insertQuery);
      console.log('createdUser :>> ', createdUser.rows[0]);
      return createdUser;
    } catch (err) {
      //повернути результат
      console.log('err :>> ', err);
    }
  }
  static getAll () {}
  static getById () {}
  static updateById () {}
  static deleteByid () {}
}

module.exports = User;
