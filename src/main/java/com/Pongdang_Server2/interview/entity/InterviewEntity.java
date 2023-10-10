package com.Pongdang_Server2.interview.entity;

import com.Pongdang_Server2.interview.dto.InterviewDTO;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Entity
@Setter
@Getter
@Table(name = "interview")
public class InterviewEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private Long id;

    @Column(unique = true)
    private String interviewTitle;

    @Column
    private String interviewee;

    @Column
    private String subtitle;

    public static InterviewEntity toInterviewEntity(InterviewDTO interviewDTO) {
        InterviewEntity interviewEntity = new InterviewEntity();
        interviewEntity.setId(interviewDTO.getId());
        interviewEntity.setInterviewTitle(interviewDTO.getInterviewTitle());
        interviewEntity.setInterviewee(interviewDTO.getInterviewee());
        interviewEntity.setSubtitle(interviewDTO.getSubtitle());

        return interviewEntity;
    }
}
