package com.Pongdang_Server2.interview.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity(name = "interview")
public class InterviewEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private Long id;

    @Column(unique = true, name = "interview_title")
    private String interview_title;

    @Column(name = "interviewee")
    private String interviewee;

    @Column(name = "subtitle")
    private String subtitle;

    public InterviewEntity(String interview_title, String interviewee, String subtitle) {
        this.interview_title = interview_title;
        this.interviewee = interviewee;
        this.subtitle = subtitle;
    }
}
