// Add JavaScript below
import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js@2.13.1'

const supabaseUrl = 'https://ojheruhssynyqxehaipd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qaGVydWhzc3lueXF4ZWhhaXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA0NjUxMTAsImV4cCI6MTk5NjA0MTExMH0.klzuc_wo_Wt27xBmfQejt2490NzQ30hWDVspx7DBcRs'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')
  
  for (let book of books) {
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td>${book.description}</td>`;
  }
}

getBooks();