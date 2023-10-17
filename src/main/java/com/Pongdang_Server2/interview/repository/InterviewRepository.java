package com.Pongdang_Server2.interview.repository;

import com.Pongdang_Server2.interview.entity.InterviewEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface InterviewRepository {
    void save(InterviewEntity interviewEntity);
}
