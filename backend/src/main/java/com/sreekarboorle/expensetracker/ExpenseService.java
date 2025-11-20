package com.sreekarboorle.expensetracker.service;

import com.sreekarboorle.expensetracker.model.Expense;
import com.sreekarboorle.expensetracker.repository.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ExpenseService {
    private final ExpenseRepository repo;

    public ExpenseService(ExpenseRepository repo) { this.repo = repo; }

    public List<Expense> findAll() { return repo.findAll(); }
    public Optional<Expense> findById(Long id) { return repo.findById(id); }
    public Expense save(Expense e) { return repo.save(e); }
    public void deleteById(Long id) { repo.deleteById(id); }
    public List<Expense> findByDateRange(LocalDate start, LocalDate end) { return repo.findByDateBetween(start, end); }
}
