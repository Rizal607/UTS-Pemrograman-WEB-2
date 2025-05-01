# UTS-Pemrograman-WEB-2

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>To-Do List</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; }
    h1 { color: #333; }
    ul { list-style: none; padding: 0; }
    li { padding: 8px; margin: 5px 0; background: #f4f4f4; display: flex; justify-content: space-between; }
    input[type="text"] { padding: 8px; width: 70%; }
    button { padding: 8px 15px; background: #28a745; color: white; border: none; cursor: pointer; }
    .delete-btn { background: #dc3545; }
  </style>
</head>
<body>
  <h1>To-Do List</h1>
  <form action="/add" method="POST">
    <input type="text" name="task" placeholder="Tambahkan task baru..." required>
    <button type="submit">Tambah</button>
  </form>
  <ul>
        <form action="/delete" method="POST" style="display: inline;">
          <input type="hidden" name="task" value="<%= task %>">
          <button type="submit" class="delete-btn">Hapus</button>
        </form>
  </ul>
</body>
</html>
