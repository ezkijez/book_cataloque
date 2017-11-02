package com.example.bookcatalogue;

import com.example.bookcatalogue.config.AuthInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class BookCatalogueApplication extends WebMvcConfigurerAdapter {

	@Autowired
	private AuthInterceptor authInterceptor;

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
	    registry.addInterceptor(authInterceptor);
	}

	public static void main(String[] args) {
		SpringApplication.run(BookCatalogueApplication.class, args);
	}
}
