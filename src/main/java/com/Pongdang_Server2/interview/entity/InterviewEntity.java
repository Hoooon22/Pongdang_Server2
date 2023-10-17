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

    @Column(unique = true)
    private String interviewTitle;

    @Column
    private String interviewee;

    @Column
    private String subtitle;

    public InterviewEntity(String interviewTitle, String interviewee, String subtitle) {
        this.interviewTitle = interviewTitle;
        this.interviewee = interviewee;
        this.subtitle = subtitle;
    }
}
