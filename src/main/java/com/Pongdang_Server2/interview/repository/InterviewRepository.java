package com.Pongdang_Server2.interview.repository;

import com.Pongdang_Server2.interview.entity.InterviewEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InterviewRepository extends JpaRepository<InterviewEntity, Long> {
    List<InterviewEntity> findByInterviewTitleContainingOrIntervieweeContainingOrSubtitleContainingOrNumRockContaining(String interviewTitle, String interviewee, String subtitle, String numRock);
}