package com.spring.ajax.api.util;

import java.util.ArrayList;
import java.util.List;

import com.spring.ajax.api.dto.Book;

public class ListBooksDefault {
	
	public static List<Book> getListBooksDefault(){
		
		List<Book> listDefault = new ArrayList<>();
		
		Book b1 = new Book(1,"Cien años de soledad","Gabriel García Márquez");
		Book b2 = new Book(2,"El amor en los tiempos del cólera	","Gabriel García Márquez");
		Book b3 = new Book(3,"Fausto","Johann Wolfgang von Goethe");
		Book b4 = new Book(4,"Almas muertas	","Nikolai Gogol");

		listDefault.add(b1);
		listDefault.add(b2);
		listDefault.add(b3);
		listDefault.add(b4);

		return listDefault;
		
	}

}
