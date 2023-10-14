package com.example.movie.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.movie.dto.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
